import AllSayingChannel from '../components/AllSayingChannel'
import Divider from '../Layout/Divider'
import MainWrapper from '../Layout/MainWrapper'
import SayingGet from '../components/SayingGet'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const SayingPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.saying.0')}
      </div>
      <AllSayingChannel />
      <Divider content={t('divider.allSaying') as string} />
      <SayingGet />
    </MainWrapper>
  )
}

export default SayingPage
