import { useEffect, useState } from 'react'
import fire from 'firebase'
import { v4 as uuid } from 'uuid'
import {
  CrudState,
  errorsDefaultValues,
  loadingDefaultValues,
  Record,
} from '../types/entities.types'
import { Id, IdType, Nullable, Optional } from '../types/utility.types'
import { dbRef } from '../utils/firebase.utils'

export function useRecords(user: Optional<Nullable<fire.User>>) {
  const [records, setRecords] = useState<Array<Id<Record>>>([])
  const [errors, setErrors] = useState<CrudState<Nullable<Error>>>(
    errorsDefaultValues
  )
  const [loading, setLoading] = useState<CrudState<boolean>>(
    loadingDefaultValues
  )

  const recordsRef = user ? dbRef.child(`records/${user.uid}`) : null

  useEffect(() => {
    if (user && recordsRef) {
      recordsRef.on('value', snapshot => {
        try {
          setLoading({ ...loading, read: true })
          setRecords(snapshot.val())
          setLoading({ ...loading, read: false })
        } catch (e) {
          setErrors({ ...errors, read: e.message })
        }
      })
    }
  }, [user])

  async function onCreate(record: Record) {
    try {
      setLoading({ ...loading, create: true })
      await recordsRef?.push({ ...record, id: uuid() })
      setLoading({ ...loading, create: false })
    } catch (e) {
      setErrors({ ...errors, create: e.message })
    }
  }

  async function onUpdate(record: Id<Record>) {
    try {
      setLoading({ ...loading, update: true })
      await recordsRef
        ?.child(record.id)
        .set({ ...record, completed: !record.completed })
      setLoading({ ...loading, update: false })
    } catch (e) {
      setErrors({ ...errors, update: e.message })
    }
  }

  async function onDelete(id: IdType) {
    try {
      setLoading({ ...loading, delete: true })
      await recordsRef?.child(id).remove()
      setLoading({ ...loading, delete: false })
    } catch (e) {
      setErrors({ ...errors, delete: e.message })
    }
  }

  return { records, onCreate, onUpdate, onDelete, loading, errors }
}
