import React from 'react'
import { ButtonAddProps } from '../../types/components.types'

export const ButtonCreate: React.FC<ButtonAddProps> = ({
  onCreate,
  ...rest
}) => (
  <button className="add-task-menu__button" {...rest} onClick={onCreate}>
    <i className="fa fa-plus-square-o add-task-menu__button-icon" />
    <span className="add-task-menu__button-label">{'Добавить'}</span>
  </button>
)
