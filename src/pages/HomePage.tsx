import MainWrapper from '../Layout/MainWrapper'
import Method from '../components/Method'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  console.log(lng)
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  return (
    <MainWrapper>
      <div>
        <div className='text-3xl text-center mb-4 font-bold tracking-widest'>
          {t('marcyMailBox')}
        </div>
        <div className=' leading-10 tracking-widest text-justify'>
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
        <Method/>
      </div>
    </MainWrapper>
  )
}

export default HomePage
