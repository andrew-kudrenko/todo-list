import { useEffect, useState } from "react"
import { Record, RecordState } from '../interfaces'
import { getRecords as getFromDB, addRecord as addToDB, removeRecord as removeFromDB } from "../utils/api-utils"

export const useRecordState = (): RecordState => {
  const [records, setRecords] = useState<Record[]>([])

  const updateRecords = async () => {
    const data = await getFromDB()
    setRecords(data)
  }
  
  const addRecord = async (record: Record) => {
    await addToDB(record)
    await updateRecords()
    setRecords([record, ...records])
  }
  const removeRecord = async (id: string) => {
    await removeFromDB(id)
    await updateRecords()
    setRecords(records.filter(r => r._id !== id))
  }

  useEffect(() => { updateRecords() }, [])

  return { records, addRecord, removeRecord }
}