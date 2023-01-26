import Divider from '../Layout/Divider'
import HostIntroItem from './HostIntroItem'
import { ReactComponent as MarkFace } from '../assets/Figure/MarkFace.svg'
import { ReactComponent as MaryInThree } from '../assets/Figure/MaryInThree.svg'
import { ReactComponent as HankCake } from '../assets/Figure/HankCake.svg'
import { hostIntroData } from '../wordingData'
import { useTranslation } from 'react-i18next'

const HostIntro: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Divider content={t('divider.host') as string} />
      <HostIntroItem title={hostIntroData[0].name}>
        {hostIntroData[0].intro.map((data, index) => (
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
      <HostIntroItem title={hostIntroData[1].name}>
        {hostIntroData[1].intro.map((data, index) => (
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
      <HostIntroItem title={hostIntroData[2].name}>
        {hostIntroData[2].intro.map((data, index) => (
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
