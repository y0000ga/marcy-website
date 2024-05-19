import { IWrapper } from '@/type/common.type'

export const Weather = async ({ children }: IWrapper) => {
  return (
    <div className='h-10 flex justify-center items-center bg-red-500 overflow-hidden -z-10 w-full md:text-2xl'>
      <p className='inline-block text-white animate-marquee'>{children}</p>
    </div>
  )
}
