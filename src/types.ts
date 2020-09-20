import { Record } from './interfaces'

export type RemoveRecordCallback = (id: string) => Promise<void>
export type AddRecordCallback = (r: Record) => Promise<void>
