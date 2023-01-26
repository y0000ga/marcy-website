import { listeningGuideData } from '../wordingData'
import Divider from '../Layout/Divider'
import { useTranslation } from 'react-i18next'

const ListeningGuide = () => {
  const { t } = useTranslation()
  return (
    <>
      <Divider content='聆聽指南' />
      <div className='leading-loose mt-4 text-justify flex flex-col items-center'>
        <ul>
          {listeningGuideData.map((data) => (
            <li key={data.title}>
              <span className='font-semibold'>{data.title}</span>
              <br />
              {data.description}
            </li>
          ))}
        </ul>
        <div className='border border-slate-300 w-fit py-1 px-2 rounded-md m-4 cursor-pointer hover:bg-red-500 hover:text-white'>
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
