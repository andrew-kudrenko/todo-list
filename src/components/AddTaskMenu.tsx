import React, { useRef, useState } from 'react'
import { AddTaskMenuProps } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'
import { AddTaskButton } from './AddTaskButton'

export const AddTaskMenu: React.FC<AddTaskMenuProps> = ({ add }) => {
  const [opened, setOpened] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const id = useRef<string>(uuidv4()).current
  const date = useRef<string>(new Date().toLocaleDateString()).current
  const completed = useRef<boolean>(false).current

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const addHandler = add.bind(null, { title, id, date, completed })

  if (!opened) {
    return <AddTaskButton callback={setOpened.bind(null, true)} />
  } else {
    return (
      <div className="add-task-menu">
        <div className="add-task-menu__editor">
          <input
            type="text"
            className="add-task-menu__editor-input"
            onChange={changeHandler}
          />
          <AddTaskButton callback={addHandler} />
        </div>
      </div>
    )
  }
}