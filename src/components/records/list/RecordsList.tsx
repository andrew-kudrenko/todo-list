import React from 'react'
import { RecordsListProps } from '../../../types/components.types'
import { Loader } from '../../stubs/spinners/Spinner'
import { RecordsListItem } from './RecordsListItem'

export const RecordsList: React.FC<RecordsListProps> = ({
  data: records,
  onDelete,
  loading,
  emptyListText,
}) => (
  <ul className="record-list">
    {loading.read ? (
      <div className="record-list__loader-wrapper">
        <Loader />
      </div>
    ) : records.length > 0 ? (
      records.map((r, index) => (
        <RecordsListItem
          {...r}
          index={index + 1}
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
