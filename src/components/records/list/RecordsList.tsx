import React from 'react'
import { RecordsListProps } from '../../../types/components.types'
import { RecordsListItem } from './RecordsListItem'

export const RecordsList: React.FC<RecordsListProps> = ({
  data: records,
  onDelete,
  onUpdate,
  emptyListText,
}) => (
  <ul className="record-list">
    {records.length > 0 ? (
      records.map((r, index) => (
        <RecordsListItem
          {...r}
          index={index + 1}
          onUpdate={onUpdate}
          onDelete={onDelete}
          key={r.id}
        />
      ))
    ) : (
      <h4 className="header text-center">
        {emptyListText || 'Здесь пока ничего нет'}
      </h4>
    )}
  </ul>
)
