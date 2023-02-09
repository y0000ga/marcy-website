
import Divider from '../Layout/Divider'
import Map from './Map'
import { useState, useEffect } from 'react'
import DiscountItem from './DiscountItem'
import { useTranslation } from 'react-i18next'

const OnSiteDiscount: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string

  useEffect(() => {
    i18n.changeLanguage(lng)
    setDiscountType(onSiteDiscountType[0])
    setDiscount(onSiteDiscount)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n, lng])

  const [discountType, setDiscountType] = useState<string>(
    t('discount.selectAll') as string
  )
  const onSiteDiscount = [
    {
      type: t('onSiteDiscountData.0.type'),
      title: t('onSiteDiscountData.0.title'),
      service: t('onSiteDiscountData.0.service'),
      method: t('onSiteDiscountData.0.method'),
      content: t('onSiteDiscountData.0.content'),
      address: t('onSiteDiscountData.0.address'),
      url: 'https://www.facebook.com/choice.gelato/',
      location: { lat: 25.061287417944545, lng: 121.53479515972094 },
    },
    {
      type: t('onSiteDiscountData.1.type'),
      title: t('onSiteDiscountData.1.title'),
      service: t('onSiteDiscountData.1.service'),
      method: t('onSiteDiscountData.1.method'),
      content: t('onSiteDiscountData.1.content'),
      address: t('onSiteDiscountData.1.address'),
      url: 'https://www.facebook.com/gelatobarzeit/',
      location: { lat: 25.042572836020106, lng: 121.54705677052584 },
    },
    {
      type: t('onSiteDiscountData.2.type'),
      title: t('onSiteDiscountData.2.title'),
      service: t('onSiteDiscountData.2.service'),
      method: t('onSiteDiscountData.2.method'),
      content: t('onSiteDiscountData.2.content'),
      address: t('onSiteDiscountData.2.address'),
      url: 'https://www.facebook.com/2730.cafe/',
      location: { lat: 25.03358104211938, lng: 121.55703061199766 },
    },
    {
      type: t('onSiteDiscountData.3.type'),
      title: t('onSiteDiscountData.3.title'),
      service: t('onSiteDiscountData.3.service'),
      method: t('onSiteDiscountData.3.method'),
      content: t('onSiteDiscountData.3.content'),
      address: t('onSiteDiscountData.3.address'),
      url: 'https://www.instagram.com/goody_patisserie/',
      location: { lat: 25.02343186975955, lng: 121.55432562209035 },
    },
    {
      type: t('onSiteDiscountData.4.type'),
      title: t('onSiteDiscountData.4.title'),
      service: t('onSiteDiscountData.4.service'),
      method: t('onSiteDiscountData.4.method'),
      content: t('onSiteDiscountData.4.content'),
      address: t('onSiteDiscountData.4.address'),
      url: 'https://www.facebook.com/thatsokseven?fref=ts',
      location: { lat: 25.088283184028953, lng: 121.46081289850642 },
    },
    {
      type: t('onSiteDiscountData.5.type'),
      title: t('onSiteDiscountData.5.title'),
      service: t('onSiteDiscountData.5.service'),
      method: t('onSiteDiscountData.5.method'),
      content: t('onSiteDiscountData.5.content'),
      address: t('onSiteDiscountData.5.address'),
      url: 'https://www.facebook.com/lacopaoscura/',
      location: { lat: 25.115521841885204, lng: 121.50959156967059 },
    },
    {
      type: t('onSiteDiscountData.6.type'),
      title: t('onSiteDiscountData.6.title'),
      service: t('onSiteDiscountData.6.service'),
      method: t('onSiteDiscountData.6.method'),
      content: t('onSiteDiscountData.6.content'),
      address: t('onSiteDiscountData.6.address'),
      url: 'https://www.instagram.com/welcome.inhousenail/',
      location: { lat: 25.049948940164604, lng: 121.56571999325419 },
    },
    {
      type: t('onSiteDiscountData.7.type'),
      title: t('onSiteDiscountData.7.title'),
      service: t('onSiteDiscountData.7.service'),
      method: t('onSiteDiscountData.7.method'),
      content: t('onSiteDiscountData.7.content'),
      address: t('onSiteDiscountData.7.address'),
      url: 'https://www.facebook.com/profile.php?id=100048712966277',
      location: { lat: 24.443294618781724, lng: 118.33712609850096 },
    },
  ]
  const [discount, setDiscount] = useState(onSiteDiscount)
  const onSiteDiscountType = [
    t('discount.selectAll'),
    t('discount.all'),
    t('discountTypeData.0'),
    t('discountTypeData.2'),
    t('discountTypeData.6'),
  ]
  const chooseDiscountTypeHandler = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDiscountType(event.target.value)
    if (
      event.target.value === onSiteDiscountType[0] ||
      event.target.value === onSiteDiscountType[1]
    ) {
      setDiscount(onSiteDiscount)
    } else {
      setDiscount(
        onSiteDiscount.filter((data) => event.target.value === data.type)
      )
    }
  }
  return (
    <div>
      <Divider content={t('divider.onSiteDiscount') as string} />
      <Map discount={discount} />
      <select
        className='border border-gray-300 px-4 py-2 my-8 rounded-md left-1/2 -translate-x-1/2'
        value={discountType}
        onChange={chooseDiscountTypeHandler}
      >
        {onSiteDiscountType.map((data) => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
      </select>
      <div className='flex flex-wrap justify-center'>
        {discount.map((data) => (
          <DiscountItem
            key={data.title}
            title={data.title}
            type={data.type}
            url={data.url}
            service={data.service}
            method={data.method}
            content={data.content}
            address={data.address}
          />
        ))}
      </div>
    </div>
  )
}

export default OnSiteDiscount
