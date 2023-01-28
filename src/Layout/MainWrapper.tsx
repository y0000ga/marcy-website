import Header from './Header'
import HeaderContainer from './HeaderContainer'
import donationLogo from '../assets/Logo/donationLogo.svg'
import { useNavigate } from 'react-router-dom'
import ScrollUpButton from '../components/ScrollUpButton'
import Footer from './Footer'
interface MainWrapperProps {
  children: React.ReactNode
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {

  const navigate = useNavigate()
  const donationHandler = () => {
    navigate('/donation')
  }
  return (
    <div
      className='w-full overflow-hidden flex flex-col items-center'
      style={{ minWidth: '320px' }}
    >
      <Header />
      <HeaderContainer />
      <div className=' my-10 px-5 sm:px-12 md:px-20 lg:px-36 xl:px-40 xl:text-xl 2xl:px-52 z-0 max-w-screen-2xl'>
        {children}
      </div>
      <div
        className='bg-white w-24 h-24 fixed bottom-10 left-10 cursor-pointer animate-bounce z-10'
        onClick={donationHandler}
      >
        <img src={donationLogo} alt='donation' className='w-24 border' />
      </div>
      <ScrollUpButton />
      <Footer />
    </div>
  )
}

export default MainWrapper
