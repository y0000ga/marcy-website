import initTranslations from '@/i18n'
import marcyLogoSrc from '/public/assets/Logo/marcyLogo.svg'
import Image from 'next/image'
import { HostIntro } from '@/components/about/HostIntro'
import { range, uniq } from 'lodash'
import { IPage } from '@/type/common.type'
import {
  MARCY_PLAYLIST_ID,
  YOUTUBE_PLAYLIST_URL,
  histories,
} from '@/helper/constant'
import { History } from '@/components/History'
import ListeningGuideIcon01 from '/public/assets/ListeningGuideIcon/ListeningGuideIcon (1).png'
import ListeningGuideIcon02 from '/public/assets/ListeningGuideIcon/ListeningGuideIcon (2).png'
import ListeningGuideIcon03 from '/public/assets/ListeningGuideIcon/ListeningGuideIcon (3).png'
import ListeningGuideIcon04 from '/public/assets/ListeningGuideIcon/ListeningGuideIcon (4).png'
import { guideUrls } from '@/helper/constant'
import { Guide } from '@/components/Guide'
import { Dictionary } from '@/components/Dictionary'
import { TypingHeader } from '@/components/Typing'

const years = uniq(
  histories.map((history) => history.time.toString().substring(0, 4))
)

const Page = async ({ params }: IPage) => {
  const { t } = await initTranslations(params.locale)
  const dotHistory = histories.map(({ time }) => ({
    time,
    content: t(`dotHistory.${time}`),
  }))

  const yearOptions = [t('unlimitedYear'), ...years]

  const guides = [
    {
      title: t('listeningGuideData.0.title'),
      description: t('listeningGuideData.0.description'),
      imgUrl: ListeningGuideIcon01.src,
      button: t('listeningGuideData.0.button'),
      videoUrl: guideUrls[0],
    },
    {
      title: t('listeningGuideData.1.title'),
      description: t('listeningGuideData.1.description'),
      imgUrl: ListeningGuideIcon04.src,
      button: t('listeningGuideData.1.button'),
      videoUrl: guideUrls[1],
    },
    {
      title: t('listeningGuideData.2.title'),
      description: t('listeningGuideData.2.description'),
      imgUrl: ListeningGuideIcon02.src,
      button: t('listeningGuideData.2.button'),
      videoUrl: guideUrls[2],
    },
    {
      title: t('listeningGuideData.3.title'),
      description: t('listeningGuideData.3.description'),
      imgUrl: ListeningGuideIcon03.src,
      button: t('listeningGuideData.3.button'),
      videoUrl: guideUrls[3],
    },
  ]

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
          <div className='text-center text-neutral-400 mb-4'>
            {t('figureDescription.0')}
          </div>
        </div>
        <div>
          {t('pageOpeningData.about.0')}
          {t('pageOpeningData.about.1')}
        </div>
      </div>
      <TypingHeader content={t('divider.host')} />
      <HostIntro
        name={t('hostIntroData.0.name')}
        description={t('figureDescription.1')}
        imgSrc='https://i.imgur.com/liu3NdI.jpeg'
        contents={range(8).map((num) => t(`hostIntroData.0.intro.${num}`))}
      />
      <HostIntro
        name={t('hostIntroData.1.name')}
        description={t('figureDescription.2')}
        imgSrc='https://media.zenfs.com/zh-tw/news_tvbs_com_tw_938/d811d1a0d2fcfd2860d01d373372e01d'
        contents={range(5).map((num) => t(`hostIntroData.1.intro.${num}`))}
      />
      <TypingHeader content={t('divider.history')} />
      <History dotHistory={dotHistory} yearOptions={yearOptions} />
      <TypingHeader content={t('divider.listeningGuide')} />
      <Guide guides={guides} />
      <a
        className='relative border border-slate-300 w-fit p-4 rounded-md m-4 cursor-pointer hover:bg-red-500 hover:text-white'
        href={`${YOUTUBE_PLAYLIST_URL}?list=${MARCY_PLAYLIST_ID}`}
        target='_blank'
      >
        {t('listeningGuide.crazy')}
        <span className='flex h-4 w-4 absolute -top-1 -right-1'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-4 w-4 bg-yellow-500'></span>
        </span>
      </a>
      <TypingHeader content={t('divider.dictionary')} />
      <Dictionary dictionaries={dictionaries} />
    </>
  )
}

export default Page
