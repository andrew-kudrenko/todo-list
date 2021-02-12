import React from 'react'
import { RecordsListItemProps } from '../../../types/components.types'

export const RecordsListItem: React.FC<RecordsListItemProps> = props => {
  const { onDelete, index, id, title, createdOn } = props

  return (
    <li className="record">
      <div className="d-flex">
        <strong className="record__index mr-1">{`${index}. `}</strong>
        <span className="record__title">{title}</span>
      </div>
      <div className="d-flex">
        <span className="record__date text-italic">
          {new Date(createdOn).toLocaleString()}
        </span>
        <i
          className="record__btn ml-2 fa fa-trash-o"
          onClick={onDelete.bind(null, id)}
        ></i>
      </div>
    </li>
  )
}
