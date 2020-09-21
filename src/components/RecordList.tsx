import React from 'react'
import { RecordListProps } from '../interfaces'
import { Loader } from './Loader'
import { RecordListItem } from './RecordListItem'

export const RecordList: React.FC<RecordListProps> = ({ records, remove, loading = false }) =>
  <ul className="record-list">
    {
      loading
        ? <div className="record-list__loader-wrapper"><Loader /></div>
        : records.length
          ? records.map((r, index) =>
            <RecordListItem
              {...r}
              index={index + 1}
              remove={remove}
              key={r._id}
            />
          )
          : <h4 className="header text-center">Здесь пока ничего нет</h4>
    }
  </ul>