import { useEffect, useState } from "react"
import { Record, RecordState } from '../interfaces'
import { getRecords as getFromDB, addRecord as addToDB, removeRecord as removeFromDB } from "../utils/api-utils"

export const useRecordState = (): RecordState => {
  const [records, setRecords] = useState<Record[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const updateRecords = async () => {
    setLoading(true)
    const data = await getFromDB()
    setRecords(data)
    setLoading(false)
  }
  
  const addRecord = async (record: Record) => {
    await addToDB(record)
    await updateRecords()
  }
  const removeRecord = async (id: string) => {
    await removeFromDB(id)
    await updateRecords()
  }

  useEffect(() => { updateRecords() }, [])

  return { records, loading, addRecord, removeRecord }
}