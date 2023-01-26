import React from 'react'
import MainWrapper from '../Layout/MainWrapper'
import OnSiteDiscount from '../components/OnSiteDiscount'
import OnlineDiscount from '../components/OnlineDiscount'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const DiscountPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.discount.0')}
      </div>
      <OnlineDiscount />
      <OnSiteDiscount />
    </MainWrapper>
  )
}

export default DiscountPage
