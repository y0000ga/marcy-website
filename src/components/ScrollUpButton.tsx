import { useEffect, useState } from 'react'

export const createThrottle = (
  callback: Function,
  delay?: number,
  thisArg?: unknown
): Function => {
  let lastInvokeTime: number = Date.now()
  const _delay = Number(delay) || 200
  return (...args: any[]): void => {
    const now = Date.now()
    if (now - _delay <= lastInvokeTime) {
      return
    }
    lastInvokeTime = now
    callback.call(thisArg, ...args)
  }
}

const ScrollUpButton: React.FC = () => {
  const [isShown, setIsShown] = useState(false)
  useEffect(() => {
    const listener = createThrottle(() => {
      const shouldIsShown = window.scrollY > 300
      if (shouldIsShown !== isShown) {
        setIsShown(shouldIsShown)
      }
    }, 500) as EventListener
    document.addEventListener('scroll', listener)
    return () => document.removeEventListener('scroll', listener)
  }, [isShown])
  return (
    <>
      {isShown ? (
        <div
          className='fixed right-10 bottom-10 w-12 h-12 border bg-gray-100 text-xl rounded-md flex justify-center items-center cursor-pointer hover:bg-gray-200'
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className='text-sky-500'>▲</span>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ScrollUpButton
