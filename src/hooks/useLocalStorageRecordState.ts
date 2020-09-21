import { useEffect, useState } from "react"
import { LocalStorageRecordState, Record } from '../interfaces'

export const useLocalStorageRecordState = (): LocalStorageRecordState => {
  const [records, setRecords] = useState<Record[]>([])

  const key = 'records'

  const getRecords = (): Record[] => JSON.parse(localStorage.getItem(key) || '[]')

  const updateRecords = (): void => setRecords(getRecords())

  const addRecord = (r: Record): void => {
    const recordsFromLS = getRecords()
    localStorage.setItem(key, JSON.stringify([r, ...recordsFromLS]))
    updateRecords()
  }

  const removeRecord = (id: string): void => {
    const recordsFromLS = getRecords()
    const filteredRecords = recordsFromLS.filter(r => r._id !== id)
    localStorage.setItem(key, JSON.stringify(filteredRecords))
    updateRecords()
  }

  useEffect(updateRecords, [])

  return { records, addRecord, removeRecord }
}