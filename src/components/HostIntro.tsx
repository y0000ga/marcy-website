import Divider from '../Layout/Divider'
import HostIntroItem from './HostIntroItem'
import { ReactComponent as MarkFace } from '../assets/Figure/MarkFace.svg'
import { ReactComponent as MaryInThree } from '../assets/Figure/MaryInThree.svg'
import { ReactComponent as HankCake } from '../assets/Figure/HankCake.svg'

const HostIntro: React.FC = () => {
  return (
    <>
      <Divider content='主持人介紹' />
      <HostIntroItem title='教主 歐馬克'>
        <li>本名沈子煜，1982/11/22 出生，畢業於政治大學 (東方哈佛) 外交學系</li>
        <li>腿長為 112 公分的無預警情緒高張者，手掌長 24 公分，喜歡大膝蓋</li>
        <li>2001 年參加飛碟 DJ 徵選，以 18 歲年紀成爲當時該電台最年輕的 DJ</li>
        <li>長相類似曾文鼎、幽遊白書的桑原和小籔千豐</li>
        <MarkFace className='w-full border h-full p-2 my-2' />
        <div className='text-center text-neutral-400 mb-4'>
          圖二、馬克長相九宮格
        </div>
        <li>小時候喜歡水蜜桃姊姊，而且蒐集很多李心潔的周邊商品</li>
        <li>
          2015 上 Podcast
          青春愛消遣當特別來賓，表示女友和瑪麗若同時落水不會救瑪麗
        </li>
        <li>2018/03/21，在老婆 Katia 生日當天於大安戶政事務所登記結婚</li>
        <li>
          2022 創辦自我成長品牌「聲藝」，希望用聲音的藝術幫助人們去到想去的地方
        </li>
      </HostIntroItem>
      <HostIntroItem title='教母 吳瑪麗'>
        <li>本名吳宜媚，1984/07/19 出生，畢業於輔仁大學影像傳播系</li>
        <li>暱稱為華人女單、廣播女神</li>
        <li>
          2004 年透過徵選加入飛碟電台擔任
          DJ，目前活躍於專欄創作、綜藝節目、網路直播以及活動主持等領域
        </li>
        <li>目前為台視綜藝三國智固定班底，並與張立東形成螢幕CP</li>
        <MaryInThree className='w-full border h-full p-2 my-2' />
        <div className='text-center text-neutral-400 mb-4'>
          圖三、瑪麗於綜藝三國智的可愛笑容
        </div>
        <li>2015/11/11，單曲《事情不是你想的那樣》集資計畫上架秒殺</li>
      </HostIntroItem>
      <HostIntroItem title='強強 喬治'>
        <li>本名吳仲強，1986/08/24 出生，曾為 Starmaker 的模特兒</li>
        <li>2010 年入伍當兵而短暫離開，2011 年十一月初回到周日青春點點點</li>
        <li>曾迷上做菜並且會在節目中分享食譜，現為漢克自肥甜點老闆師傅</li>
        <HankCake className='w-full border h-full p-2 my-2' />
        <div className='text-center text-neutral-400 mb-4'>
          圖三、漢克自肥甜點的鏡面蛋糕
        </div>
      </HostIntroItem>
    </>
  )
}

export default HostIntro
