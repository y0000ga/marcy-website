import React from 'react'
import MainWrapper from '../Layout/MainWrapper'
import OnSiteDiscount from '../components/OnSiteDiscount'
import OnlineDiscount from '../components/OnlineDiscount'
import { pageOpeningData } from '../wordingData'

const DiscountPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {pageOpeningData.discount}
      </div>
      {/* <OnlineDiscount />
      <OnSiteDiscount /> */}
    </MainWrapper>
  )
}

export default DiscountPage
