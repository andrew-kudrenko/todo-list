import { useState } from 'react'
import { LocalStorageHookReturnType } from '../types/hooks.types'

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): LocalStorageHookReturnType<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)

      return item ? JSON.parse(item) : defaultValue
    } catch (e) {
      console.error(e)
      return defaultValue
    }
  })

  function setValue(value: T): void {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (e) {
      console.error(e)
    }
  }

  function removeItem(): void {
    window.localStorage.removeItem(key)
  }

  return [storedValue, setValue, removeItem]
}
