import AllSayingChannel from '../components/AllSayingChannel'
import Divider from '../Layout/Divider'
import MainWrapper from '../Layout/MainWrapper'
import SayingGet from '../components/SayingGet'
import { pageOpeningData } from '../wordingData'

const SayingPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {pageOpeningData.saying[0]}
      </div>
      <Divider content='名言大集合' />
      <SayingGet />
      <AllSayingChannel />
    </MainWrapper>
  )
}

export default SayingPage
