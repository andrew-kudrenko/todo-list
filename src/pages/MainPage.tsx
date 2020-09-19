import React from 'react'
import { AddTaskMenu } from '../components/AddTaskMenu'
import { RecordList } from '../components/RecordList'
import { MainPageProps } from '../interfaces'

export const MainPage: React.FC<MainPageProps> = props => {
  return (
    <>
      <h2 className="header h2 text-center">Список дел</h2>
      <AddTaskMenu add={props.add} />
      <RecordList {...props} />
    </>
  )
}