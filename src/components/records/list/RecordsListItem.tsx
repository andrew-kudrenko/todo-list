import React from 'react'
import { RecordsListItemProps } from '../../../types/components.types'

export const RecordsListItem: React.FC<RecordsListItemProps> = props => {
  const { onDelete, index, id, title, createdOn } = props

  return (
    <li className="record-list-item">
      <div className="record-list-item__wrapper">
        <strong className="record-list-item__index">{index}</strong>
        <span className="record-list-item__title">{title}</span>
      </div>
      <div className="record-list-item__wrapper">
        <span className="record-list-item__date italic">{createdOn}</span>
        <i
          className="record-list-item__button fa fa-trash-o"
          onClick={onDelete.bind(null, id)}
        ></i>
      </div>
    </li>
  )
}
