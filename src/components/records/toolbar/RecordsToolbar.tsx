import React, { useState } from 'react'
import { RecordsToolbarProps } from '../../../types/components.types'
import { onChange } from '../../../utils/events.utils'
import {
  longerThan,
  shorterThan,
  validate,
} from '../../../utils/validate.utils'
import { ButtonCreate } from '../../buttons/ButtonCreate'

export const RecordsToolbar: React.FC<RecordsToolbarProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('')

  const isValid = validate(title, [longerThan(0), shorterThan(100)])

  return (
    <div className="toolbar w-100 d-flex justify-center">
      <div className="toolbar__input">
        <input
          autoFocus
          type="text"
          className="text-field mr-2"
          onChange={onChange(setTitle)}
          value={title}
          placeholder="Новая задача"
        />
        <ButtonCreate
          onCreate={() => {
            onCreate({
              title,
              completed: false,
              createdOn: Date.now(),
            })
            setTitle('')
          }}
          disabled={!isValid}
        />
      </div>
    </div>
  )
}
