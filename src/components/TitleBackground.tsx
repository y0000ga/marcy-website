import { useTranslation } from 'react-i18next'
import aboutBackground from '../assets/HeaderBackground/aboutBackground.svg'
import actionBackground from '../assets/HeaderBackground/actionBackground.svg'
import donationBackground from '../assets/HeaderBackground/donationBackground.svg'
import gameBackground from '../assets/HeaderBackground/gameBackground.svg'
import sayingBackground from '../assets/HeaderBackground/sayingBackground.svg'
import discountBackground from '../assets/HeaderBackground/discountBackground.png'
import secretBackground from '../assets/HeaderBackground/secretBackground.png'

interface TitleBackgroundProps {
  pathname: string
}

const TitleBackground: React.FC<TitleBackgroundProps> = ({ pathname }) => {
  const { t } = useTranslation()
  const navItemInfo = [
    { title: t('navItemInfo.0.title'), pathname: '/about' },
    { title: t('navItemInfo.1.title'), pathname: '/action' },
    { title: t('navItemInfo.2.title'), pathname: '/saying' },
    { title: t('navItemInfo.3.title'), pathname: '/donation' },
    { title: t('navItemInfo.4.title'), pathname: '/game' },
    { title: t('navItemInfo.5.title'), pathname: '/secret' },
    { title: t('navItemInfo.6.title'), pathname: '/discount' },
  ]
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
  } else if (pathname.includes('saying')) {
    currentBackground = sayingBackground
  } else if (pathname.includes('discount')) {
    currentBackground = discountBackground
  } else {
    currentBackground = secretBackground
  }
  return (
    <>
      <div className='w-full overflow-hidden max-h-96 select-none border'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-center text-neutral-600 text-4xl font-bold tracking-widest md:text-5xl lg:text-7xl'>
          {currentTitle}
        </div>
        <div className='flex justify-center items-center'>
          <img
            src={currentBackground}
            alt='background'
            className='w-full -z-50 opacity-40 transition-opacity'
          />
        </div>
      </div>
    </>
  )
}

export default TitleBackground
