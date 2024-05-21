export const throttleListener = <T extends (...args: any[]) => void>(
  callback: T,
  delay = 200
): ((...args: Parameters<T>) => void) => {
  let lastInvokeTime = Date.now()
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastInvokeTime <= delay) {
      return
    }
    lastInvokeTime = now
    callback(...args)
  }
}
