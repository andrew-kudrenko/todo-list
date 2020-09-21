import { RemoveRecordCallback, AddRecordCallback   } from './types'

export interface Record {
  _id: string
  title: string
  date: string
  completed: boolean
}

export interface RecordListProps {
  records: Record[]
  remove: RemoveRecordCallback
  loading?: boolean
}

export interface RecordListItemProps extends Record {
  index: number
  remove: RemoveRecordCallback
}

export interface MainPageProps extends RecordListProps {
  add: AddRecordCallback
} 

export interface RecordState {
  records: Record[]
  addRecord: AddRecordCallback
  removeRecord: RemoveRecordCallback
  loading: boolean
}

export interface LocalStorageRecordState {
  records: Record[]
  addRecord: AddRecordCallback
  removeRecord: RemoveRecordCallback
}

export interface AddTaskMenuProps {
  add: AddRecordCallback
}

export interface AddTaskButtonProps {
  callback: (() => void) | (() => Promise<void>)
  disabled: boolean
}
