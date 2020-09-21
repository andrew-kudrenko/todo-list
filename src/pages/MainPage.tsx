import React from 'react'
import { AddTaskMenu } from '../components/AddTaskMenu'
import { RecordList } from '../components/RecordList'
import { MainPageProps } from '../interfaces'

export const MainPage: React.FC<MainPageProps> = props => {
  return (
    <>
      <AddTaskMenu add={props.add} />
      <RecordList {...props} />
    </>
  )
}