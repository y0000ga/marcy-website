export const throttleListener = (
  callback: (...args: unknown[]) => void,
  delay?: number
): EventListener => {
  let lastInvokeTime = Date.now()
  const _delay = delay || 200
  return (...args: unknown[]): void => {
    const now = Date.now()
    if (now - _delay <= lastInvokeTime) {
      return
    }
    lastInvokeTime = now
    callback(...args)
  }
}
