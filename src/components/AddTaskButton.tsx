import React from 'react'
import { AddTaskButtonProps } from '../interfaces'

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ callback, disabled }) =>
  <button
    className="add-task-menu__button"
    onClick={callback}
    disabled={disabled}
  >
    <i className="fa fa-plus-square-o add-task-menu__button-icon" />
    <span className="add-task-menu__button-label">
      Добавить
    </span>
  </button>