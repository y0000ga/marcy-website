import MainWrapper from '../Layout/MainWrapper'
import Divider from '../Layout/Divider'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  return (
    <MainWrapper>
      <div>
        <div className='text-3xl text-center mb-4 font-bold tracking-widest'>
          {t('marcyMailBox')}
        </div>
        <div className='text-xl leading-10 tracking-widest font-extralight text-justify'>
          {t('pageOpeningData.home.0')}
          <span className='text-sky-500 font-normal'>
            {t('pageOpeningData.home.1')}
          </span>
          {t('pageOpeningData.home.2')}
          <span className='text-sky-500 font-normal'>
            {t('pageOpeningData.home.3')}
          </span>
          {t('pageOpeningData.home.4')}
        </div>

        <Divider content={t('divider.relativeNews') as string} />
      </div>
    </MainWrapper>
  )
}

export default HomePage
