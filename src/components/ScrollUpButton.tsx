import { useEffect, useState } from 'react'

export const createThrottle = (
  callback: (...args: any) => void,
  delay?: number,
): Function => {
  let lastInvokeTime: number = Date.now()
  console.log(lastInvokeTime)
  const _delay = delay || 200
  return (...args: any[]): void => {
    const now = Date.now()
    if (now - _delay <= lastInvokeTime) {
      return
    }
    lastInvokeTime = now
    callback(...args)
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
          className='fixed right-10 bottom-10 w-12 h-12 border bg-gray-100 text-xl rounded-md flex justify-center items-center cursor-pointer hover:bg-gray-200 z-10'
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
