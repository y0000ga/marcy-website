'use client'

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { gsap } from 'gsap'

export const JumpMoney = () => {
  const limeMoneyRef = useRef<HTMLDivElement | null>(null)
  const blueMoneyRef = useRef(null)
  const redMoneyRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      [limeMoneyRef.current, redMoneyRef.current],
      { y: 18 },
      { y: -18, duration: 0.5, yoyo: true, repeat: -1 }
    )
    gsap.fromTo(
      [blueMoneyRef.current],
      { y: -18 },
      { y: 18, duration: 0.5, yoyo: true, repeat: -1 }
    )
  })

  return (
    <div className='text-5xl absolute flex -z-10'>
      <div ref={limeMoneyRef}>
        <FaMoneyBillWave className='text-lime-100 mx-4' />
      </div>
      <div ref={blueMoneyRef}>
        <FaMoneyBillWave className='text-blue-100 mx-4' />
      </div>
      <div ref={redMoneyRef}>
        <FaMoneyBillWave className='text-red-100 mx-4' />
      </div>
    </div>
  )
}
