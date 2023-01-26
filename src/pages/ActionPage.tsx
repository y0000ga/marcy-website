import MainWrapper from '../Layout/MainWrapper'
import YoutubeDisplayBox from '../components/YoutubeDisplayBox'
import Divider from '../Layout/Divider'
import { useTranslation } from 'react-i18next'
import Book from '../components/Book'
import Memory from '../components/Memory'
import Create from '../components/Create'
import { useEffect } from 'react'

const ActionPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])

  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.action.0')}
      </div>
      <Memory />
      <Divider content={t('divider.firstSong') as string} />
      <YoutubeDisplayBox
        key={t('marySongData.id')}
        id={t('marySongData.id')}
        title={t('marySongData.title')}
        description={t('marySongData.description')}
      />
      <Book />
      <Create />
    </MainWrapper>
  )
}

export default ActionPage
