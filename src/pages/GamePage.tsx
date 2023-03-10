import Divider from '../Layout/Divider'
import MainWrapper from '../Layout/MainWrapper'
import PsychTest from '../components/PsychTest'
import { BsDot, BsCircle } from 'react-icons/bs'
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import gameIcon from '../assets/Figure/gameIcon.png'

const GamePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  const psychTestData = [
    {
      topic: t('phyTestTopic.0'),
      children: <BsDot />,
    },
    {
      topic: t('phyTestTopic.1'),
      children: <BsCircle />,
    },
    {
      topic: t('phyTestTopic.2'),
      children: <TfiLayoutLineSolid className='origin-center -rotate-45' />,
    },
    {
      topic: t('phyTestTopic.3'),
      children: <TfiLayoutLineSolid className=' origin-center rotate-45' />,
    },
    {
      topic: t('phyTestTopic.4'),
      children: <TfiLayoutLineSolid />,
    },
    {
      topic: t('phyTestTopic.5'),
      children: <TfiLayoutLineSolid className=' origin-center rotate-90' />,
    },
  ]
  return (
    <MainWrapper>
      <img src={gameIcon} alt='game' className='m-auto' />
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.game.0')}
      </div>
      <Divider content={t('divider.phyTestTitle') as string} />
      <div className='flex flex-wrap justify-around'>
        {psychTestData.map((data, index) => (
          <PsychTest number={index + 1} topic={data.topic} key={data.topic}>
            {data.children}
          </PsychTest>
        ))}
      </div>
    </MainWrapper>
  )
}

export default GamePage
