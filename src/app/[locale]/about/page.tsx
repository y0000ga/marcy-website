import initTranslations from '@/i18n'
import marcyLogoSrc from '/public/assets/Logo/marcyLogo.svg'
import Image from 'next/image'
import { range } from 'lodash'
import { IPage } from '@/type/common.type'
import {
  MARCY_PLAYLIST_ID,
  YOUTUBE_PLAYLIST_URL,
  guides,
  histories,
  yearOptions,
  ytVideoUrl,
} from '@/helper/constant'
import { History } from '@/components/History'
import { Guide } from '@/components/Guide'
import { Dictionary } from '@/components/Dictionary'
import { TypingHeader } from '@/components/Typing'
import { HostIntro } from '@/components/HostIntro'

const Page = async ({ params }: IPage) => {
  const { t } = await initTranslations(params.locale)
  const dotHistory = histories.map(({ time }) => ({
    time,
    content: t(`dotHistory.${time}`),
  }))

  const guideDetail = (index: number) => {
    const prefix = 'listeningGuideData.' + index.toString()
    return {
      title: t(`${prefix}.title`),
      description: t(`${prefix}.description`),
      button: t(`${prefix}.button`),
    }
  }

  const guideDetails = guides.map(({ imgUrl, id }, index) => ({
    imgUrl,
    videoUrl: ytVideoUrl(id),
    ...guideDetail(index),
  }))

  const dictionaries = range(1, 10).map((num) => ({
    title: t(`dotDictionary0${num}.title`),
    text: t(`dotDictionary0${num}.description`),
  }))

  return (
    <>
      <div className='flex justify-center items-center my-10'>
        <Image
          src={marcyLogoSrc}
          width={200}
          height={200}
          alt='marcy'
          className='w-16 mr-4'
        />
        <div className='font-black text-3xl text-neutral-600 lg:text-6xl'>
          {t('marcyMailBox')}
        </div>
      </div>
      <div className='leading-loose mt-4 text-justify'>
        <div className='flex items-center flex-col'>
          <Image
            src='https://cdn2.ettoday.net/images/2344/d2344809.jpg'
            alt='spirit'
            height={200}
            width={500}
            className='my-4 rounded-lg'
          />
        </div>
        <div>
          {t('pageOpeningData.about.0')}
          {t('pageOpeningData.about.1')}
        </div>
      </div>
      <TypingHeader content={t('divider.host')} />
      <HostIntro
        name={t('hostIntroData.0.name')}
        imgSrc='https://i.imgur.com/liu3NdI.jpeg'
        contents={range(8).map((num) => t(`hostIntroData.0.intro.${num}`))}
      />
      <HostIntro
        name={t('hostIntroData.1.name')}
        imgSrc='https://media.zenfs.com/zh-tw/news_tvbs_com_tw_938/d811d1a0d2fcfd2860d01d373372e01d'
        contents={range(5).map((num) => t(`hostIntroData.1.intro.${num}`))}
      />
      <TypingHeader content={t('divider.history')} />
      <History dotHistory={dotHistory} yearOptions={yearOptions} />
      <TypingHeader content={t('divider.listeningGuide')} />
      <Guide guides={guideDetails} />
      <a
        className='relative border border-slate-300 w-fit p-4 rounded-md m-4 cursor-pointer hover:bg-red-500 hover:text-white'
        href={`${YOUTUBE_PLAYLIST_URL}?list=${MARCY_PLAYLIST_ID}`}
        target='_blank'
      >
        {t('listeningGuide.crazy')}
        <span className='flex h-4 w-4 absolute -top-1 -right-1'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75' />
          <span className='relative inline-flex rounded-full h-4 w-4 bg-yellow-500' />
        </span>
      </a>
      <TypingHeader content={t('divider.dictionary')} />
      <Dictionary dictionaries={dictionaries} />
    </>
  )
}

export default Page
