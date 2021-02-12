import React from 'react'
import { RecordsListItemProps } from '../../../types/components.types'

export const RecordsListItem: React.FC<RecordsListItemProps> = props => {
  const { onDelete, onUpdate, index, ...record } = props
  const { id, title, createdOn, completed } = record

  return (
    <li className={`record ${completed ? 'completed' : ''}`}>
      <div onClick={onUpdate.bind(null, record)} className="d-flex">
        <strong className="record__index mr-1">{`${index}. `}</strong>
        <span className="record__title">{title}</span>
      </div>
      <div className="d-flex">
        <span className="record__date text-italic">
          {new Date(createdOn).toLocaleString()}
        </span>
        <div onClick={onDelete.bind(null, id)}>
          <i className="record__btn ml-2 fa fa-trash-o">{'✖'}</i>
        </div>
      </div>
    </li>
  )
}
