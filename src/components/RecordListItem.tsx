import React from 'react'
import { RecordListItemProps } from '../interfaces'

export const RecordListItem: React.FC<RecordListItemProps> = props => {
  return (
    <li className="record-list-item">
      <div>
        <strong className="record-list-item__index">
          {props.index}
        </strong>
        <span className="record-list-item__title">
          {props.title}
        </span>
      </div>
      <div>
        <span className="record-list-item__date italic">
          {props.date}
        </span>
        <i
          className="record-list-item__button fa fa-trash-o"
          onClick={props.remove.bind(null, props._id)}
        ></i>
      </div>
    </li>
  )
}