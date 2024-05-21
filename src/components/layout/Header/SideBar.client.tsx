'use client'

import { IWrapper } from '@/type/common.type'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Sidebar = ({ children }: IWrapper) => {
  const [isToggle, setIsToggle] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsToggle(false)
  }, [pathname])

  return (
    <>
      <RxHamburgerMenu
        className='text-2xl mx-6 my-4 cursor-pointer xl:hidden'
        onClick={() => setIsToggle((prev) => !prev)}
      />
      {isToggle && children}
    </>
  )
}
