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
    <div className="add-task-menu">
      <div className="add-task-menu__editor">
        <input
          type="text"
          className="add-task-menu__editor-input"
          onChange={onChange(setTitle)}
          value={title}
          placeholder="Новая задача"
        />
        <ButtonCreate onCreate={onCreate} disabled={!isValid} />
      </div>
    </div>
  )
}
