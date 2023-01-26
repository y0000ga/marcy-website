import Header from './Header'
import HeaderContainer from './HeaderContainer'
import donationLogo from '../assets/Logo/donationLogo.svg'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface MainWrapperProps {
  children: React.ReactNode
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const donationHandler = () => {
    navigate('/donation')
  }
  return (
    <div className='w-full overflow-hidden flex flex-col items-center' style={{ minWidth: '320px' }}>
      <Header />
      <HeaderContainer />
      <div className=' my-10 px-5 sm:px-12 md:px-20 lg:px-36 xl:px-40 xl:text-xl 2xl:px-52 z-0 max-w-screen-2xl'>
        {children}
      </div>
      <div
        className='bg-white w-24 h-24 fixed bottom-10 right-10 cursor-pointer animate-bounce'
        onClick={donationHandler}
      >
        <img src={donationLogo} alt='donation' className='w-24 border' />
      </div>
      <div className='border-t border-gray-200 p-10 text-center leading-loose shadow-2xl w-full'>
        {t('footer.0')}
        <br />
        {t('footer.1')}
      </div>
    </div>
  )
}

export default MainWrapper
