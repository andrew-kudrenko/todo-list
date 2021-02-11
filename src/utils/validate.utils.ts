export function validate<T>(
  value: T,
  callbacks: Array<(v: T) => boolean>
): boolean {
  return callbacks.every(c => c(value))
}

export function longerThan(value: number) {
  return function (line: string): boolean {
    return line.trim().length > value
  }
}

export function shorterThan(value: number) {
  return function (line: string): boolean {
    return line.trim().length < value
  }
}
