import Divider from '../Layout/Divider'
import { useTranslation } from 'react-i18next'

const ListeningGuide = () => {
  const { t } = useTranslation()
  const listeningGuide = [
    {
      title: t('listeningGuideData.0.title'),
      description: t('listeningGuideData.0.description'),
    },
    {
      title: t('listeningGuideData.1.title'),
      description: t('listeningGuideData.1.description'),
    },
    {
      title: t('listeningGuideData.2.title'),
      description: t('listeningGuideData.2.description'),
    },
    {
      title: t('listeningGuideData.3.title'),
      description: t('listeningGuideData.3.description'),
    },
  ]
  return (
    <>
      <Divider content={t('divider.listeningGuide') as string} />
      <div className='leading-loose mt-4 text-justify flex flex-col'>
        <ul>
          {listeningGuide.map((data) => (
            <li key={data.title}>
              <span className='font-semibold'>{data.title}</span>
              <br />
              {data.description}
            </li>
          ))}
        </ul>
        <div
          className='border border-slate-300 w-fit py-1 px-2 rounded-md m-4 cursor-pointer left-1/2 -translate-x-1/2 hover:bg-red-500 hover:text-white'
          onClick={() => {
            setTimeout(() => {
              window.open(
                'https://www.youtube.com/watch?v=qOUEXAAFxWY&list=PLuGVMNMvIB_GW6pwd0Tj6rjoEvZxn6UuE',
                '_blank'
              )
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
