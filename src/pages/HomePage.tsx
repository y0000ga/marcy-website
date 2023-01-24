import MainWrapper from '../Layout/MainWrapper'
import Divider from '../Layout/Divider'
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <MainWrapper>
      <div>
        <div className='text-3xl text-center mb-4 font-bold tracking-widest'>
          馬克信箱
        </div>
        <div className='text-xl leading-10 tracking-widest font-extralight text-justify'>
          2004年，青春點點點於飛碟電台首播，開播以來深受學生族群的歡迎。
          最後一集於2017年3月7日播出後，主持人歐馬克將其延續為Podcast
          <span className='text-sky-500 font-normal'> 馬克信箱 DearMarcy </span>
          與 YouTube
          <span className='text-sky-500 font-normal'>上班可以聽 LWW </span>
          與瑪麗繼續共同主持，每週一、四上午11點更新。
        </div>
        <Divider content='相關新聞' />
      </div>
    </MainWrapper>
  )
}

export default HomePage
