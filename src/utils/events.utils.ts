export function onChange(fn: (value: string) => void) {
  return function (event: React.ChangeEvent<HTMLInputElement>) {
    fn(event.target.value)
  }
}
