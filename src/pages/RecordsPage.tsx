import React from 'react'
import { RecordsList } from '../components/records/list/RecordsList'
import { RecordsToolbar } from '../components/records/toolbar/RecordsToolbar'
import { useRecords } from '../hooks/records.hook'
import { RecordsPageProps } from '../types/components.types'

export const RecordsPage: React.FC<RecordsPageProps> = ({ user }) => {
  const { records, ...rest } = useRecords(user)

  return (
    <>
      <RecordsToolbar {...rest} />
      <RecordsList data={records} {...rest} />
    </>
  )
}
