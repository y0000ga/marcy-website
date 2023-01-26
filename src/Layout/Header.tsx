import { RxHamburgerMenu } from 'react-icons/rx'
import { ReactComponent as MarcyLogo } from '../assets/Logo/marcyLogo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
interface navItemProps {
  title: string
  pathname: string
}

const NavItem: React.FC<navItemProps> = ({ title, pathname }) => {
  const navigate = useNavigate()
  const currentPathname = useLocation().pathname
  return (
    <li
      className='w-full h-12 flex justify-center items-center tracking-widest border-b cursor-pointer hover:text-blue-500'
      onClick={() => {
        navigate(pathname)
      }}
    >
      {pathname === currentPathname && (
        <span className='flex h-3 w-3 mr-4'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
        </span>
      )}
      {title}
    </li>
  )
}

const Header = () => {
  const [isToggle, setIsToggle] = useState(false)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng')
  const navItemInfo = [
    { title: t('navItemInfo.0.title'), pathname: '/about' },
    { title: t('navItemInfo.1.title'), pathname: '/action' },
    { title: t('navItemInfo.2.title'), pathname: '/saying' },
    { title: t('navItemInfo.3.title'), pathname: '/donation' },
    { title: t('navItemInfo.4.title'), pathname: '/game' },
    { title: t('navItemInfo.5.title'), pathname: '/secret' },
    { title: t('navItemInfo.6.title'), pathname: '/discount' },
  ]
  return (
    <nav className='relative w-full h-1/5 flex items-center justify-between border-b drop-shadow-2xl z-50'>
      <div className='mx-6 my-4 flex flex-row items-center cursor-pointer'>
        <MarcyLogo
          className='w-16 mr-4'
          onClick={() => {
            navigate('/')
          }}
        />
        <div
          className='font-black text-3xl text-neutral-600'
          onClick={() => {
            navigate('/')
          }}
        >
          {t('marcyMailBox')}
        </div>
      </div>
      <RxHamburgerMenu
        className='text-2xl mx-6 my-4 cursor-pointer'
        onClick={() => {
          setIsToggle((prevIsToggle) => !prevIsToggle)
        }}
      />
      {isToggle ? (
        <ul className='absolute top-full w-full border-t bg-white'>
          {navItemInfo.map((navItem) => (
            <NavItem
              title={navItem.title}
              key={navItem.title}
              pathname={navItem.pathname}
            />
          ))}
          <li className='w-full h-12 flex justify-center items-center tracking-widest border cursor-pointer '>
            <span
              className={`hover:text-blue-500 mx-2 ${
                lng === 'tw' && 'text-blue-500'
              }`}
              onClick={() => {
                i18n.changeLanguage('tw')
                localStorage.setItem('lng', 'tw')
              }}
            >
              繁體中文{' '}
            </span>{' '}
            |
            <span
              style={{ fontFamily: 'Noto Sans SC' }}
              className={`hover:text-blue-500 mx-2  ${
                lng === 'cn' && 'text-blue-500'
              }`}
              onClick={() => {
                i18n.changeLanguage('cn')
                localStorage.setItem('lng', 'cn')
              }}
            >
              简体中文
            </span>
          </li>
        </ul>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Header
