import HostIntro from '../components/HostIntro'
import ListeningGuide from '../components/ListeningGuide'
import MainWrapper from '../Layout/MainWrapper'
import { ReactComponent as MarcyLogo } from '../assets/Logo/marcyLogo.svg'
import DotHistory from '../components/DotHistory'
import DotDictionary from '../components/DotDictionary'
import { pageOpeningData } from '../wordingData'

const AboutPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='flex justify-center items-center'>
        <MarcyLogo className='w-16 mr-4' />
        <div className='font-black text-3xl text-neutral-600'>馬克信箱</div>
      </div>
      <div className='leading-loose mt-4 text-justify'>
        {pageOpeningData.about[0]}
        <div>
          <img
            src='https://cdn2.ettoday.net/images/2344/d2344809.jpg'
            alt='spirit'
            className='my-4'
          />
          <div className='text-center text-neutral-400 mb-4'>
            圖一、主持人：歐馬克、吳瑪麗、喬治
          </div>
          {pageOpeningData.about[1]}
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
