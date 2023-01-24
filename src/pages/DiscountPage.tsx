import React from 'react'
import MainWrapper from '../Layout/MainWrapper'
import OnSiteDiscount from '../components/OnSiteDiscount'
import OnlineDiscount from '../components/OnlineDiscount'

const DiscountPage: React.FC = () => {
  return (
    <MainWrapper>
      <OnlineDiscount />
      <OnSiteDiscount />
    </MainWrapper>
  )
}

export default DiscountPage
