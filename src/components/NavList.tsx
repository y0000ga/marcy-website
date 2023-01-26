import { useTranslation } from 'react-i18next'
import LngControl from './LngControl'
import NavItem from './NavItem'

export const ToggleNavList: React.FC = () => {
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
  return (
    <ul className='absolute top-full w-full border-t bg-white xl:hidden'>
      {navItemInfo.map((navItem) => (
        <NavItem
          title={navItem.title}
          key={navItem.title}
          pathname={navItem.pathname}
        />
      ))}
      <LngControl />
    </ul>
  )
}

export const NavList: React.FC = () => {
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
  return (
    <ul className='hidden xl:flex'>
      {navItemInfo.map((navItem) => (
        <NavItem
          title={navItem.title}
          key={navItem.title}
          pathname={navItem.pathname}
        />
      ))}
      <LngControl />
    </ul>
  )
}
