import { ILocale, ProductType } from '@/type/common.type'
import Image from 'next/image'

interface IProps {
  title: string
  description: string
  imgSrc: string
  buyUrl: string
  type: ProductType
}

export const Product = async ({
  title,
  description,
  imgSrc,
  buyUrl,
  type,
}: IProps) => (
  <div className='my-8 flex flex-col items-center lg:flex-row'>
    <Image
      src={imgSrc}
      alt={title}
      width={200}
      height={200}
      className={`${type === ProductType.book ? 'w-96' : 'w-80'} border`}
    />
    <div className={`${type === ProductType.book ? '' : 'mx-8'} w-full `}>
      <a
        className='font-bold text-xl my-4 flex items-center justify-center cursor-pointer'
        href={buyUrl}
        target='_blank'
      >
        {title}
      </a>
      <div className='tracking-widest leading-loose my-4 text-justify'>
        {description}
      </div>
    </div>
  </div>
)
