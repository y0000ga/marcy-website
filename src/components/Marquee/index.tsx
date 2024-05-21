import { ReactNode } from 'react'

export const Marquee = ({
  children,
  textColor,
  backgroundColor
}: {
  children: ReactNode
    textColor: string
  backgroundColor:string
}) => {
  return (
    <div className={`flex justify-center items-center relative ${textColor} ${backgroundColor} h-16 md:text-2xl`}>
      <div className='animate-marquee-wrapper'>
        <div className='whitespace-nowrap animate-marquee-content'>
          {children}
        </div>
      </div>
    </div>
  )
}
