import MainWrapper from '../Layout/MainWrapper'
import Divider from '../Layout/Divider'
import { pageOpeningData } from '../wordingData'

const HomePage: React.FC = () => {
  return (
    <MainWrapper>
      <div>
        <div className='text-3xl text-center mb-4 font-bold tracking-widest'>
          馬克信箱
        </div>
        <div className='text-xl leading-10 tracking-widest font-extralight text-justify'>
          {pageOpeningData.home[0]}
          <span className='text-sky-500 font-normal'>
            {pageOpeningData.home[1]}
          </span>
          {pageOpeningData.home[2]}
          <span className='text-sky-500 font-normal'>
            {pageOpeningData.home[3]}
          </span>
          {pageOpeningData.home[4]}
        </div>
        <Divider content='相關新聞' />
      </div>
    </MainWrapper>
  )
}

export default HomePage
