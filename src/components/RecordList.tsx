import React from 'react'
import { RecordListProps } from '../interfaces'
import { RecordListItem } from './RecordListItem'

export const RecordList: React.FC<RecordListProps> = ({ records, remove }) =>
  <ul className="record-list">
    {
      records.map((r, index) =>
        <RecordListItem 
          {...r} 
          index={index + 1} 
          remove={remove}
          key={r._id}
        />
      )
    }
  </ul>