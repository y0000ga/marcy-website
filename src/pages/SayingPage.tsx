import AllSayingChannel from '../components/AllSayingChannel'
import Divider from '../Layout/Divider'
import MainWrapper from '../Layout/MainWrapper'
import SayingGet from '../components/SayingGet'

const SayingPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        馬克信箱不事先討論，不先看信件，也不會在節目結束後聊細節與過程，在錄製節目的過程中不斷給予聽眾人生意見與想法。讓作為聽眾的我們能夠看到很多不同的人生，成為某種程度輸入。
      </div>
      <Divider content='名言大集合' />
      <SayingGet />
      <AllSayingChannel />
    </MainWrapper>
  )
}

export default SayingPage
