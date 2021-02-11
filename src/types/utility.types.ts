export type Promisify<T extends (...args: any) => any> = (
  ...args: Parameters<T>
) => ReturnType<T> | Promise<ReturnType<T>>

export type Nullable<T> = T | null

export type Optional<T> = T | undefined

export type IdType = string

export type Id<T extends object, U = IdType> = T & { id: U }
