import { ButtonHTMLAttributes } from 'react'
import { DataState, Record } from './entities.types'
import { Id, Promisify } from './utility.types'

export type ButtonAddProps = {
  onCreate: Promisify<() => void>
} & ButtonHTMLAttributes<HTMLButtonElement>

export type RecordsListProps = {
  emptyListText?: string
} & Pick<DataState<Record>, 'loading' | 'onDelete' | 'data'>

export type RecordsListItemProps = Omit<Id<Record>, 'completed'> &
  Pick<RecordsListProps, 'onDelete'> & { index: number }

export type RecordsToolbarProps = {
  onCreate: Promisify<(value: Record) => void>
}

export type RecordsPageProps = {
  user: firebase.default.User
}

export type PrivateRoutesProps = RecordsPageProps
