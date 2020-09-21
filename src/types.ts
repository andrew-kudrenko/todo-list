import { Record } from './interfaces'

export type RemoveRecordCallback = (id: string) => Promise<void> | void
export type AddRecordCallback = (r: Record) => Promise<void> | void

export enum RecordsDataSource { DB, LS }