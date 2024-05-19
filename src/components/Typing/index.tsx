import Image from 'next/image'
import { TypingWord } from './TypingWord'

interface IProps {
  content: string
}

export const TypingHeader = ({ content }: IProps) => (
  <h1 className='inline-flex items-center justify-center w-full my-4 lg:my-8'>
    <hr className='w-full mx-4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ' />
    <span className='absolute px-2 font-bold tracking-widest text-xl -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 flex items-center lg:text-4xl'>
      <TypingWord title={content} />
    </span>
  </h1>
)

interface IImageProps {
  title: string
  imgSrc: string
}

export const TypingHeaderImage = ({ title, imgSrc }: IImageProps) => (
  <div className='relative w-full h-96 max-h-96 select-none border'>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-center text-neutral-600 text-3xl font-bold tracking-widest md:text-5xl lg:text-7xl'>
      <TypingWord title={title} />
    </div>
    <Image
      src={imgSrc}
      layout='fill'
      alt='background'
      objectFit='cover'
      className='-z-50 opacity-40 transition-opacity'
    />
  </div>
)
