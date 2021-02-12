import React from 'react'
import { ButtonAddProps } from '../../types/components.types'

export const ButtonCreate: React.FC<ButtonAddProps> = ({
  onCreate,
  ...rest
}) => (
  <button className="btn bg-primary text-white" {...rest} onClick={onCreate}>
    <i className="fa fa-plus-square-o mr-1" />
    <span className="">{'Добавить'}</span>
  </button>
)
