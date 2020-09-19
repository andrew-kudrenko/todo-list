import React from 'react'
import { AddTaskButtonProps } from '../interfaces'

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ callback }) =>
  <div
    className="add-task-menu__button"
    onClick={callback}
  >
    <i className="fa fa-plus-square-o add-task-menu__button-icon" />
    <span className="add-task-menu__button-label">
      Добавить задачу
    </span>
  </div>