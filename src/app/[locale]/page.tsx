import pictureFromOthers from '/public/assets/Figure/pictureFromOthers.png'
import Image from 'next/image'
import {
  MARCY_API_URL,
  recommendVideoIds,
  ytImgUrl,
  ytVideoUrl,
} from '@/helper/constant'
import initTranslations from '@/i18n'
import { IPage } from '@/type/common.type'
import { range } from 'lodash'
import { Weather } from '@/components/Weather'
import axios from 'axios'
import InfiniteScroll from '@/components/InfiniteScroll'
import { Loading } from '@/components/Loading'
import { Marquee } from '@/components/Marquee/index.client'
import { TypingHeader } from '@/components/Typing'

const Page = async ({ params }: IPage) => {
  const { t } = await initTranslations(params.locale)

  const slides = recommendVideoIds.map((id, index) => ({
    title: t(`advertiseTitle.${index}`), // TODO: get by youtube
    imgSrc: ytImgUrl(id),
    externalUrl: ytVideoUrl(id),
  }))

  const { data: WeatherData } = await axios.request({
    method: 'GET',
    url: `${MARCY_API_URL}/weather`,
  })

  const finalData = WeatherData.data

  if (!finalData) {
    return <Loading />
  }

  const { weather } = finalData

  return (
    <>
      <Weather>
        {t('weather.opening')}
        {weather === 'Error' ? t('weather.undefined') : weather}
      </Weather>
      <section className='main-content'>
        <Marquee slides={slides} />
        <div className='text-3xl text-center mb-4 font-bold tracking-widest'>
          {t('marcyMailBox')}
        </div>
        <div className='leading-10 tracking-widest text-justify'>
          {t('pageOpeningData.home.0')}
          <span className='text-sky-500 font-normal'>
            {t('pageOpeningData.home.1')}
          </span>
          {t('pageOpeningData.home.2')}
          <span className='text-sky-500 font-normal'>
            {t('pageOpeningData.home.3')}
          </span>
          {t('pageOpeningData.home.4')}
        </div>
        <TypingHeader content={t('divider.method') as string} />
        <div className='flex flex-col lg:flex-row'>
          <div className='flex justify-center items-center'>
            <Image
              width={200}
              height={200}
              src={pictureFromOthers}
              alt='pictureFromOthers'
              className='border w-full my-4 md:w-96'
            />
          </div>
          <div className='lg:pl-8 relative'>
            <div className='leading-loose tracking-widest my-4'>
              <div className='text-lg text-sky-500 my-4'>
                {t('method.letter.title')}
              </div>
              <div className='my-2'>📪 {t('method.letter.address')}</div>
              <ul>
                {range(3).map((num) => (
                  <li key={num}>
                    👋
                    <span className='ml-2'>
                      {t(`method.letter.warning.${num}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <span className='text-9xl font-black absolute animate-pulse opacity-5 scale-150 right-10 bottom-10'>
              ?
            </span>
            <div className='leading-loose tracking-widest my-4'>
              <div className='text-lg text-sky-500 my-4'>
                {t('method.picture.title')}
              </div>
              <div className='my-2'>📪 {t('method.picture.address')}</div>
              <ul>
                {range(2).map((num) => (
                  <li key={num}>
                    👋
                    <span className='ml-2'>
                      {t(`method.picture.warning.${num}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <TypingHeader content='OH MARCY!' />
        <InfiniteScroll />
      </section>
    </>
  )
}

export default Page
