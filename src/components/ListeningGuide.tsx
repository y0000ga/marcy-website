import Divider from '../Layout/Divider'
import { useTranslation } from 'react-i18next'
import ListeningGuideIcon01 from '../assets/ListeningGuideIcon/ListeningGuideIcon (1).png'
import ListeningGuideIcon02 from '../assets/ListeningGuideIcon/ListeningGuideIcon (2).png'
import ListeningGuideIcon03 from '../assets/ListeningGuideIcon/ListeningGuideIcon (3).png'
import ListeningGuideIcon04 from '../assets/ListeningGuideIcon/ListeningGuideIcon (4).png'
import { listeningGuideData, marcyPlayListUrl } from '../wordingData'
import ListeningGuideItem from './ListeningGuideItem'

const ListeningGuide = () => {
  const { t } = useTranslation()
  const listeningGuide = [
    {
      title: t('listeningGuideData.0.title'),
      description: t('listeningGuideData.0.description'),
      imgUrl: ListeningGuideIcon01,
      button: t('listeningGuideData.0.button'),
      videoUrl: listeningGuideData[0],
    },
    {
      title: t('listeningGuideData.1.title'),
      description: t('listeningGuideData.1.description'),
      imgUrl: ListeningGuideIcon04,
      button: t('listeningGuideData.1.button'),
      videoUrl: listeningGuideData[1],
    },
    {
      title: t('listeningGuideData.2.title'),
      description: t('listeningGuideData.2.description'),
      imgUrl: ListeningGuideIcon02,
      button: t('listeningGuideData.2.button'),
      videoUrl: listeningGuideData[2],
    },
    {
      title: t('listeningGuideData.3.title'),
      description: t('listeningGuideData.3.description'),
      imgUrl: ListeningGuideIcon03,
      button: t('listeningGuideData.3.button'),
      videoUrl: listeningGuideData[3],
    },
  ]
  return (
    <>
      <Divider content={t('divider.listeningGuide') as string} />
      <div className='leading-loose mt-4 text-justify flex flex-col'>
        <ul className='flex flex-wrap justify-center'>
          {listeningGuide.map((data) => (
            <ListeningGuideItem
              key={data.title}
              title={data.title}
              imgUrl={data.imgUrl}
              description={data.description}
              videoUrl={data.videoUrl}
              button={data.button}
            />
          ))}
        </ul>
        <div
          className='border border-slate-300 w-fit py-1 px-2 rounded-md m-4 cursor-pointer left-1/2 -translate-x-1/2 hover:bg-red-500 hover:text-white'
          onClick={() => {
            setTimeout(() => {
              window.open(marcyPlayListUrl, '_blank')
            })
          }}
        >
          {t('listeningGuide.crazy')}
          <span className='flex h-3 w-3 absolute -top-1 -right-1'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-3 w-3 bg-yellow-500'></span>
          </span>
        </div>
      </div>
    </>
  )
}

export default ListeningGuide
