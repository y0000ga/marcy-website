'use client'

import Link from 'next/link'
import Image from 'next/image'
import MarcyLogo from '/public/assets/Logo/marcyLogo.svg'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { IWrapper } from '@/type/common.type'
import { useParams } from 'next/navigation'

export const Logo = ({ children }: IWrapper) => {
  const { locale } = useParams()
  const container = useRef<HTMLAnchorElement | null>(null)

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo('.logo', { y: 20 }, { y: 0, duration: 2 })
        .fromTo('.name', { opacity: 0 }, { opacity: 1, duration: 2 })
    },
    { scope: container }
  )

  return (
    <Link
      ref={container}
      href={`/${locale}`}
      className='mx-6 my-4 font-black text-3xl text-neutral-600 flex items-center cursor-pointer'
    >
      <Image
        src={MarcyLogo}
        width={200}
        height={200}
        alt='logo'
        className='w-16 mr-4 logo'
      />
      <span className='name'>{children}</span>
    </Link>
  )
}
