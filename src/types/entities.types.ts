import { Id, IdType, Nullable, Promisify } from './utility.types'

export interface DataState<T extends object> extends CrudActions<T> {
  data: Array<Id<T>>
  loading: CrudState<boolean>
  errors: CrudState<Nullable<Error>>
}

export interface CrudState<T> {
  create: T
  read: T
  update: T
  delete: T
}

export interface CrudActions<T extends object> {
  onCreate: Promisify<(value: T) => void>
  onRead: Promisify<(value: T) => Array<Id<T>>>
  onUpdate: Promisify<(value: Partial<T>) => void>
  onDelete: Promisify<(id: IdType) => void>
}

export interface Record {
  title: string
  completed: boolean
  createdOn: number
}

const noop = () => {}

const mockReturnData = () => []

export const errorsDefaultValues: CrudState<Nullable<Error>> = {
  create: null,
  read: null,
  update: null,
  delete: null,
}

export const loadingDefaultValues: CrudState<boolean> = {
  create: false,
  read: false,
  update: false,
  delete: false,
}

export const actionsDefaultValues: CrudActions<any> = {
  onCreate: noop,
  onRead: mockReturnData,
  onUpdate: noop,
  onDelete: noop,
}
