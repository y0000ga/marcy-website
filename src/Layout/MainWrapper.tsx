import Header from './Header'
import HeaderContainer from './HeaderContainer'
import donationLogo from '../assets/Logo/donationLogo.svg'
import { useNavigate } from 'react-router-dom'

interface MainWrapperProps {
  children: React.ReactNode
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  const navigate = useNavigate()
  const donationHandler = () => {
    navigate('/donation')
  }
  return (
    <div className='w-full overflow-hidden' style={{ minWidth: '320px' }}>
      <Header />
      <HeaderContainer />
      <div className='w-full my-10 px-5 sm:px-9 md:px-12 lg:px-8 xl:px-16 2xl:px-20 z-0'>
        {children}
      </div>
      <div
        className='bg-white w-24 h-24 fixed bottom-10 right-10 cursor-pointer animate-bounce'
        onClick={donationHandler}
      >
        <img src={donationLogo} alt='donation' className='w-24 border' />
      </div>
      <div className='border-t border-gray-200 p-10 text-center leading-loose shadow-2xl'>
        馬克信箱 Dear Marcy <br /> ©Marcy. All rights reserved.
      </div>
    </div>
  )
}

export default MainWrapper