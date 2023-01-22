import { navItemInfo } from '../wordingData'
import aboutBackground from '../assets/HeaderBackground/aboutBackground.svg'
import actionBackground from '../assets/HeaderBackground/actionBackground.svg'
import donationBackground from '../assets/HeaderBackground/donationBackground.svg'
import gameBackground from '../assets/HeaderBackground/gameBackground.svg'
import sayingBackground from '../assets/HeaderBackground/sayingBackground.svg'

interface TitleBackgroundProps {
  pathname: string
}

const TitleBackground: React.FC<TitleBackgroundProps> = ({ pathname }) => {
  const currentPage = navItemInfo.filter((item) => item.pathname === pathname)
  const currentTitle = currentPage[0].title
  let currentBackground: string
  if (pathname.includes('about')) {
    currentBackground = aboutBackground
  } else if (pathname.includes('action')) {
    currentBackground = actionBackground
  } else if (pathname.includes('donation')) {
    currentBackground = donationBackground
  } else if (pathname.includes('game')) {
    currentBackground = gameBackground
  } else {
    currentBackground = sayingBackground
  }
  return (
    <>
      <div className='w-full overflow-hidden max-h-96 cursor-pointer select-none'>
        <div className='flex justify-center items-center'>
          <div className='absolute -z-10 flex justify-center text-center items-center text-neutral-600 text-4xl font-bold tracking-widest'>
            {currentTitle}
          </div>
          <img
            src={currentBackground}
            alt='background'
            className='w-full -z-50 cursor-pointer opacity-40 transition-opacity'
          />
        </div>
      </div>
    </>
  )
}

export default TitleBackground