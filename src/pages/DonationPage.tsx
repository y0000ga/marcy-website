import MainWrapper from '../Layout/MainWrapper'
import { BsPersonPlus } from 'react-icons/bs'
import allPayLogo from '../assets/Logo/allPayLogo.png'
import payPalLogo from '../assets/Logo/payPalLogo.png'
import streetLogo from '../assets/Logo/streetLogo.png'
import DonationItem from '../components/DonationItem'
import { pageOpeningData } from '../wordingData'




const DonationPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {pageOpeningData.donation}
      </div>
      <div className='grid grid-cols-2 my-4 gap-4'>
        <DonationItem title='加入會員' url='http://bit.ly/supportmarcy'>
          <BsPersonPlus className='text-8xl w-28 h-28' />
        </DonationItem>
        <DonationItem title='台灣點友請進' url='https://p.allpay.com.tw/kp4Ja'>
          <img src={allPayLogo} alt='allPay' className='rounded-full w-28' />
        </DonationItem>
        <DonationItem title='海外點友請進' url='https://paypal.me/ormarc'>
          <img src={payPalLogo} alt='payPal' className='w-28' />
        </DonationItem>
        <DonationItem title='900866569'>
          <img src={streetLogo} alt='Street' className='rounded-full w-28' />
        </DonationItem>
      </div>
    </MainWrapper>
  )
}

export default DonationPage
