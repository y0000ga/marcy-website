import Divider from '../Layout/Divider'
import MainWrapper from '../Layout/MainWrapper'
import PsychTest from '../components/PsychTest'
import { BsDot, BsCircle } from 'react-icons/bs'
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const GamePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  const psychTestData = [
    {
      topic: t('phyTestTopic.0'),
      children: (
        <BsDot
          className='absolute text-9xl'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ),
    },
    {
      topic: t('phyTestTopic.1'),
      children: (
        <BsCircle
          className='absolute text-9xl'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ),
    },
    {
      topic: t('phyTestTopic.2'),
      children: (
        <TfiLayoutLineSolid
          className='absolute -translate-x-1/2 -translate-y-1/2 origin-center -rotate-45'
          style={{
            fontSize: '420px',
            top: '50%',
            left: '50%',
          }}
        />
      ),
    },
    {
      topic: t('phyTestTopic.3'),
      children: (
        <TfiLayoutLineSolid
          className='absolute -translate-x-1/2 -translate-y-1/2 origin-center rotate-45'
          style={{
            fontSize: '420px',
            top: '50%',
            left: '50%',
          }}
        />
      ),
    },
    {
      topic: t('phyTestTopic.4'),
      children: (
        <TfiLayoutLineSolid
          className='absolute -translate-x-1/2 -translate-y-1/2 '
          style={{
            fontSize: '350px',
            top: '50%',
            left: '50%',
          }}
        />
      ),
    },
    {
      topic: t('phyTestTopic.5'),
      children: (
        <TfiLayoutLineSolid
          className='absolute -translate-x-1/2 -translate-y-1/2 origin-center rotate-90'
          style={{
            fontSize: '350px',
            top: '50%',
            left: '50%',
          }}
        />
      ),
    },
  ]
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.game.0')}
      </div>
      <Divider content={t('divider.phyTestTitle') as string} />
      {psychTestData.map((data, index) => (
        <PsychTest number={index + 1} topic={data.topic} key={data.topic}>
          {data.children}
        </PsychTest>
      ))}
    </MainWrapper>
  )
}

export default GamePage
