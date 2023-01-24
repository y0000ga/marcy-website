import Divider from '../Layout/Divider'
import HostIntroItem from './HostIntroItem'
import { ReactComponent as MarkFace } from '../assets/Figure/MarkFace.svg'
import { ReactComponent as MaryInThree } from '../assets/Figure/MaryInThree.svg'
import { ReactComponent as HankCake } from '../assets/Figure/HankCake.svg'
import { hostIntroData } from '../wordingData'

const HostIntro: React.FC = () => {
  return (
    <>
      <Divider content='主持人介紹' />
      <HostIntroItem title={hostIntroData[0].name}>
        {hostIntroData[0].intro.map((data, index) => (
          <li>
            {data}
            {index === 3 ? (
              <>
                <MarkFace className='w-full border h-full p-2 my-2' />
                <div className='text-center text-neutral-400 mb-4'>
                  圖二、馬克長相九宮格
                </div>
              </>
            ) : (
              ''
            )}
          </li>
        ))}
      </HostIntroItem>
      <HostIntroItem title={hostIntroData[1].name}>
        {hostIntroData[1].intro.map((data, index) => (
          <li>
            {data}
            {index === 3 ? (
              <>
                <MaryInThree className='w-full border h-full p-2 my-2' />
                <div className='text-center text-neutral-400 mb-4'>
                  圖三、瑪麗於綜藝三國智的可愛笑容
                </div>
              </>
            ) : (
              ''
            )}
          </li>
        ))}
      </HostIntroItem>
      <HostIntroItem title={hostIntroData[2].name}>
        {hostIntroData[2].intro.map((data, index) => (
          <li>
            {data}
            {index === 2 ? (
              <>
                <HankCake className='w-full border h-full p-2 my-2' />
                <div className='text-center text-neutral-400 mb-4'>
                  圖三、漢克自肥甜點的鏡面蛋糕
                </div>
              </>
            ) : (
              ''
            )}
          </li>
        ))}
      </HostIntroItem>
    </>
  )
}

export default HostIntro
