import MainWrapper from '../Layout/MainWrapper'
import { BsPersonPlus } from 'react-icons/bs'
import allPayLogo from '../assets/Logo/allPayLogo.png'
import payPalLogo from '../assets/Logo/payPalLogo.png'
import streetLogo from '../assets/Logo/streetLogo.png'
import DonationItem from '../components/DonationItem'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import Divider from '../Layout/Divider'
import superThank from '../assets/Figure/superThank.png'
import donationIcon from '../assets/Figure/donationIcon.png'

const DonationPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  return (
    <MainWrapper>
      <img src={donationIcon} alt='donation' className='m-auto'/>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.donation.0')}
      </div>
      <div className='grid grid-cols-2 my-4 gap-4 md:flex md:justify-between'>
        <DonationItem
          title={t('donationData.0.title')}
          url={t('donationData.0.url') as string}
        >
          <BsPersonPlus className='text-8xl w-28 h-28' />
        </DonationItem>
        <DonationItem
          title={t('donationData.1.title')}
          url={t('donationData.1.url') as string}
        >
          <img src={allPayLogo} alt='allPay' className='rounded-full w-28' />
        </DonationItem>
        <DonationItem
          title={t('donationData.2.title')}
          url={t('donationData.2.url') as string}
        >
          <img src={payPalLogo} alt='payPal' className='w-28' />
        </DonationItem>
        <DonationItem
          title={t('donationData.3.title')}
          url={t('donationData.3.url') as string}
        >
          <img src={streetLogo} alt='Street' className='rounded-full w-28' />
        </DonationItem>
      </div>
      <div>
        <Divider content={t('divider.otherDonation') as string} />
        <div className='md:flex'>
          <img src={superThank} alt='superThank' className='w-96 m-auto ' />
          <div className='text-justify my-8 leading-loose md:ml-4'>
            {t('otherDonation')}
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default DonationPage
