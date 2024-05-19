'use client'

import { IWrapper } from '@/type/common.type'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Sidebar = ({ children }: IWrapper) => {
  const [isToggle, setIsToggle] = useState(false)
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
