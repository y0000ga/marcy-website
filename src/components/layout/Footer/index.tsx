'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { range } from 'lodash'
import { IWrapper } from '@/type/common.type'

export const Footer = ({ children }: IWrapper) => {
  const footerRef = useRef(null)
  useGSAP(
    () => {
      gsap.to('p', {
        xPercent: -100,
        ease: 'none',
        duration: 15,
        repeat: -1,
      })
    },
    { scope: footerRef }
  )

  return (
    <footer className='border-t relative border-gray-200 h-40 leading-loose shadow-2xl w-full -z-10 overflow-hidden' ref={footerRef}>
      <div className='absolute z-10 text-xl leading-loose tracking-widest w-full h-full flex justify-center items-center text-center'>
        {children}
      </div>
      <p className='text-4xl whitespace-nowrap italic font-black text-sky-50 tracking-widest'>
        {range(4).map((num) => (
          <span key={num}>
            {range(20).map((subNum) => <span key={subNum}>Oh! Marcy! </span>)}
            {num < 3 && <br />}
          </span>
        ))}
      </p>
    </footer>
  )
}
