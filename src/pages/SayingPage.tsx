import AllSayingChannel from '../components/AllSayingChannel'
import Divider from '../Layout/Divider'
import MainWrapper from '../Layout/MainWrapper'
import SayingGet from '../components/SayingGet'
import { useTranslation } from 'react-i18next'

const SayingPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.saying.0')}
      </div>
      <Divider content={t('divider.allSaying') as string} />
      <SayingGet />
      <AllSayingChannel />
    </MainWrapper>
  )
}

export default SayingPage
