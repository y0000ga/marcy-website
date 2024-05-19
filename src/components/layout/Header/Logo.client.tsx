'use client'

import Link from 'next/link'
import Image from 'next/image'
import MarcyLogo from '/public/assets/Logo/marcyLogo.svg'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { IWrapper } from '@/type/common.type'

export const Logo = ({ children }: IWrapper) => {
  const container = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo('img', { y: 20 }, { y: 0, duration: 2 })
        .fromTo('.name', { opacity: 0 }, { opacity: 1, duration: 2 })
    },
    { scope: container }
  )

  return (
    <div
      className='mx-6 my-4 flex flex-row items-center cursor-pointer'
      ref={container}
    >
      <Link href={'/'}>
        <Image
          src={MarcyLogo}
          width={200}
          height={200}
          alt='logo'
          className='w-16 mr-4 '
        />
      </Link>
      <Link
        href={'/'}
        className='font-black text-3xl text-neutral-600 flex name'
      >
        {children}
      </Link>
    </div>
  )
}
