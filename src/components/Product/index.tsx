import initTranslations from '@/i18n'
import { ILocale, Locale, ProductType } from '@/type/common.type'
import Image from 'next/image'


interface IProps extends ILocale {
  title: string
  creator?: string
  date?: string
  description: string
  imgSrc: string
  buyUrl: string
  type: ProductType
}

export const Product = async ({
  title,
  creator,
  date,
  description,
  imgSrc,
  buyUrl,
  type,
  locale,
}: IProps) => {
  const { t } = await initTranslations(locale)

  return (
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
        {(creator || date) && (
          <div className='flex justify-evenly items-center my-2'>
            {creator && <>{creator}</>}
            {date && (
              <div>
                {date}
                {t('dotProductItem.publish')}
              </div>
            )}
          </div>
        )}

        <div className='tracking-widest leading-loose my-4 text-justify'>
          {description}
        </div>
      </div>
    </div>
  )
}
