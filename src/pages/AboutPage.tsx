import HostIntro from '../components/HostIntro'
import ListeningGuide from '../components/ListeningGuide'
import MainWrapper from '../Layout/MainWrapper'
import { ReactComponent as MarcyLogo } from '../assets/Logo/marcyLogo.svg'
import DotHistory from '../components/DotHistory'
import DotDictionary from '../components/DotDictionary'

const AboutPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='flex justify-center items-center'>
        <MarcyLogo className='w-16 mr-4' />
        <div className='font-black text-3xl text-neutral-600'>馬克信箱</div>
      </div>
      <div className='leading-loose mt-4 text-justify'>
        馬克信箱的前身是台灣廣播節目青春點點點，2004年10月17日於台北飛碟電台（FM92.1）首播，2007年1月23日在原本週日塊狀節目之外新增二到六的午夜帶狀節目，開播以來深受學生族群的歡迎，也有不少上班族和夜貓聽眾。
        <div>
          <img
            src='https://cdn2.ettoday.net/images/2344/d2344809.jpg'
            alt='spirit'
            className='my-4'
          />
          <div className='text-center text-neutral-400 mb-4'>
            圖一、主持人：歐馬克、吳瑪麗、喬治
          </div>
          青春點點點最後一集於2017年播出。2018年3月5日歐馬克、瑪麗再度共同主持《哥哥妹妹有意思》節目。因信沒念完，歐馬克將青春點點點的「馬克信箱」延續轉型為Podcast節目「馬克信箱（Dear
          Marcy）」與YouTube頻道「上班可以聽 LWW
          」與瑪麗繼續共同主持，每週一、四上午11點更新（星期一10分鐘，星期四60分鐘）。
          節目將繼續撥出直到把信唸完，但收件箱持續地被聽眾熱情的信件塞爆，唸完的一天遙遙無期。
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
