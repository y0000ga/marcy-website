import Divider from '../Layout/Divider'
import MainWrapper from '../Layout/MainWrapper'
import PsychTest from '../components/PsychTest'
import { BsDot, BsCircle } from 'react-icons/bs'
import { TfiLayoutLineSolid } from 'react-icons/tfi'

const psychTestData = [
  {
    topic: '你是一個怎麼樣的人',
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
    topic: '你喜歡的異性類型是',
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
    topic: '你喜歡的工作類型是',
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
    topic: '你喜歡的性愛類型是',
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
    topic: '你現在的生活狀態是',
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
    topic: '你未來所期望的生活是',
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

const GamePage: React.FC = () => {
  return (
    <MainWrapper>
      <div>
        <Divider content='麻雀的心理測驗' />
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


// 第五個是橫線: 你現在的生活
// 第六個是直線: 你在未來所期望的生活
