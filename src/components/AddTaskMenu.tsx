import React, { useState } from 'react'
import { AddTaskMenuProps } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'
import { AddTaskButton } from './AddTaskButton'

export const AddTaskMenu: React.FC<AddTaskMenuProps> = ({ add }) => {
  const [title, setTitle] = useState<string>('')
  const [pending, setPending] = useState<boolean>(false)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const addHandler = async () => {
    try {
      const _id = uuidv4()
      const date = new Date().toLocaleDateString()
      const completed = false
    
      setPending(true)
      await add({ title, _id, date, completed })

      setTitle('')
    } catch (e) {
      console.log(e)
    } finally {
      setPending(false)
    }
  }

  const isValid = title.trim().length > 0
  const disabled = !isValid || pending

  return (
    <div className="add-task-menu">
      <div className="add-task-menu__editor">
        <input
          type="text"
          className="add-task-menu__editor-input"
          onChange={changeHandler}
          value={title}
          placeholder="Новая задача"
        />
        <AddTaskButton callback={addHandler} disabled={disabled} />
      </div>
    </div>
  )
}