'use client'

import { throttleListener } from '@/util/throttleListener'
import { useEffect, useState } from 'react'

export const ScrollUpButton: React.FC = () => {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    const listener = throttleListener(() => {
      const should = window.scrollY > 300
      if (should !== isShown) {
        setIsShown(should)
      }
    }, 500)
    document.addEventListener('scroll', listener)
    return () => document.removeEventListener('scroll', listener)
  }, [isShown])

  return (
    <>
      {isShown && (
        <button
          className=' w-16 h-16 border bg-gray-100 text-xl rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 z-10'
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <span className='text-sky-500'>▲</span>
        </button>
      )}
    </>
  )
}
