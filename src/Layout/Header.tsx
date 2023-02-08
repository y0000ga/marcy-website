import { RxHamburgerMenu } from 'react-icons/rx'
import { ReactComponent as MarcyLogo } from '../assets/Logo/marcyLogo.svg'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToggleNavList, NavList } from '../components/NavList'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'

const Header = () => {
  const [isToggle, setIsToggle] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const logoRef = useRef<HTMLDivElement | null>(null)
  const nameRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo(logoRef.current, { y: 20 }, { y: 0, duration: 2 }).fromTo(
      nameRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    )
  }, [])

  return (
    <>
      <p className='w-full h-16 leading-loose px-4 text-xs  bg-gray-100 flex justify-center items-center'>
        目前因 cors 問題無法瀏覽 API
        串接資訊，建議下載後於本地閱覽，正在搶修中。
      </p>
      <nav className='relative w-full h-1/5 flex items-center justify-between border-b drop-shadow-2xl z-50'>
        <div className='mx-6 my-4 flex flex-row items-center cursor-pointer'>
          <div ref={logoRef}>
            <MarcyLogo
              className='w-16 mr-4'
              onClick={() => {
                navigate('/')
              }}
            />
          </div>
          <div
            className='font-black text-3xl text-neutral-600 flex'
            onClick={() => {
              navigate('/')
            }}
          >
            <div ref={nameRef}>{t('marcyMailBox')}</div>
          </div>
        </div>
        <NavList />
        <RxHamburgerMenu
          className='text-2xl mx-6 my-4 cursor-pointer xl:hidden'
          onClick={() => {
            setIsToggle((prevIsToggle) => !prevIsToggle)
          }}
        />
        {isToggle ? <ToggleNavList /> : ''}
      </nav>
    </>
  )
}

export default Header
