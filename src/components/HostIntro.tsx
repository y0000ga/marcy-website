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
        {markIntro.map((data, index) => (
          <li key={data}>
            {data}
            {index === 3 ? (
              <>
                <MarkFace className='w-full border h-full p-2 my-2' />
                <div className='text-center text-neutral-400 mb-4'>
                  {t('figureDescription.1')}
                </div>
              </>
            ) : (
              ''
            )}
          </li>
        ))}
      </HostIntroItem>
      <HostIntroItem title={t('hostIntroData.1.name')}>
        {maryIntro.map((data, index) => (
          <li key={data}>
            {data}
            {index === 3 ? (
              <>
                <MaryInThree className='w-full border h-full p-2 my-2' />
                <div className='text-center text-neutral-400 mb-4'>
                  {t('figureDescription.2')}
                </div>
              </>
            ) : (
              ''
            )}
          </li>
        ))}
      </HostIntroItem>
      <HostIntroItem title={t('hostIntroData.2.name')}>
        {hankIntro.map((data, index) => (
          <li key={data}>
            {data}
            {index === 2 ? (
              <>
                <HankCake className='w-full border h-full p-2 my-2' />
                <div className='text-center text-neutral-400 mb-4'>
                  {t('figureDescription.3')}
                </div>
              </>
            ) : (
              ''
            )}
          </li>
        ))}
      </HostIntroItem>
    </>
  )
}

export default HostIntro
