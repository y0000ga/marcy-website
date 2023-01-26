import { RxHamburgerMenu } from 'react-icons/rx'
import { ReactComponent as MarcyLogo } from '../assets/Logo/marcyLogo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ToggleNavList, NavList } from '../components/NavList'

const Header = () => {
  const [isToggle, setIsToggle] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

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
      <NavList/>
      <RxHamburgerMenu
        className='text-2xl mx-6 my-4 cursor-pointer xl:hidden'
        onClick={() => {
          setIsToggle((prevIsToggle) => !prevIsToggle)
        }}
      />
      {isToggle ? <ToggleNavList /> : ''}
    </nav>
  )
}

export default Header
