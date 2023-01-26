import HostIntro from '../components/HostIntro'
import ListeningGuide from '../components/ListeningGuide'
import MainWrapper from '../Layout/MainWrapper'
import { ReactComponent as MarcyLogo } from '../assets/Logo/marcyLogo.svg'
import DotHistory from '../components/DotHistory'
import DotDictionary from '../components/DotDictionary'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  return (
    <MainWrapper>
      <div className='flex justify-center items-center my-10'>
        <MarcyLogo className='w-16 mr-4' />
        <div className='font-black text-3xl text-neutral-600 lg:text-6xl'>
          {t('marcyMailBox')}
        </div>
      </div>
      <div className='leading-loose mt-4 text-justify'>
        <div className='flex items-center flex-col'>
          <img
            src='https://cdn2.ettoday.net/images/2344/d2344809.jpg'
            alt='spirit'
            className='my-4 '
          />
          <div className='text-center text-neutral-400 mb-4'>
            {t('figureDescription.0')}
          </div>
        </div>
        <div>
          {t('pageOpeningData.about.0')}
          {t('pageOpeningData.about.1')}
        </div>
      </div>
      <HostIntro />
      <DotHistory />
      <ListeningGuide />
      <DotDictionary />
    </MainWrapper>
  )
}

export default AboutPage
