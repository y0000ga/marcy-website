import Divider from '../Layout/Divider'
import HostIntroItem from './HostIntroItem'
import { ReactComponent as MarkFace } from '../assets/Figure/MarkFace.svg'
import { ReactComponent as MaryInThree } from '../assets/Figure/MaryInThree.svg'
import { ReactComponent as HankCake } from '../assets/Figure/HankCake.svg'
import { useTranslation } from 'react-i18next'

const HostIntro: React.FC = () => {
  const { t } = useTranslation()
  const markIntro = [
    t('hostIntroData.0.intro.0'),
    t('hostIntroData.0.intro.1'),
    t('hostIntroData.0.intro.2'),
    t('hostIntroData.0.intro.3'),
    t('hostIntroData.0.intro.4'),
    t('hostIntroData.0.intro.5'),
    t('hostIntroData.0.intro.6'),
    t('hostIntroData.0.intro.7'),
  ]
  const maryIntro = [
    t('hostIntroData.1.intro.0'),
    t('hostIntroData.1.intro.1'),
    t('hostIntroData.1.intro.2'),
    t('hostIntroData.1.intro.3'),
    t('hostIntroData.1.intro.4'),
  ]

  const hankIntro = [
    t('hostIntroData.2.intro.0'),
    t('hostIntroData.2.intro.1'),
    t('hostIntroData.2.intro.2'),
  ]
  return (
    <>
      <Divider content={t('divider.host') as string} />
      <HostIntroItem title={t('hostIntroData.0.name')}>
        <div className='flex flex-col items-center'>
          <MarkFace className='w-full border h-full p-2 my-2 md:w-96' />
          <div className='text-center text-neutral-400 mb-4'>
            {t('figureDescription.1')}
          </div>
        </div>
        <div className='lg:ml-4'>
          {markIntro.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </div>
      </HostIntroItem>
      <HostIntroItem title={t('hostIntroData.1.name')}>
        <div className='flex flex-col items-center'>
          <MaryInThree className='w-full border h-full p-2 my-2 lg:w-96' />
          <div className='text-center text-neutral-400 mb-4'>
            {t('figureDescription.2')}
          </div>
        </div>
        <div className='lg:ml-4'>
          {maryIntro.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </div>
      </HostIntroItem>
      <HostIntroItem title={t('hostIntroData.2.name')}>
        <div className='flex flex-col items-center'>
          <HankCake className='w-full border h-full p-2 my-2 lg:w-96' />
          <div className='text-center text-neutral-400 mb-4'>
            {t('figureDescription.3')}
          </div>
        </div>
        <div className='ml-4'>
          {hankIntro.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </div>
      </HostIntroItem>
    </>
  )
}

export default HostIntro
