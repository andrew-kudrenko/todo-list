import { useState } from "react"
import { Record, RecordState } from '../interfaces'

export const useRecordState = (): RecordState => {
  const [records, setRecords] = useState<Record[]>([
    { completed: false, date: new Date().toLocaleDateString(), id: '000', title: 'Hello1' },
    { completed: false, date: new Date().toLocaleDateString(), id: '001', title: 'Hello2' },
    { completed: false, date: new Date().toLocaleDateString(), id: '002', title: 'Hello3' },
    { completed: false, date: new Date().toLocaleDateString(), id: '003', title: 'Hello4' },
    { completed: false, date: new Date().toLocaleDateString(), id: '004', title: 'Hello5' }
  ])

  const addRecord = (record: Record) => setRecords([record, ...records])
  const removeRecord = (id: string) => setRecords(records.filter(r => r.id !== id))

  return { records, addRecord, removeRecord }
}