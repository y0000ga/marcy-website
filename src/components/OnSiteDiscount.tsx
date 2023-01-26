import Divider from '../Layout/Divider'
import Map from './Map'
import { onSiteDiscountData } from '../wordingData'
import { useState } from 'react'
import DiscountItem from './DiscountItem'
import { useTranslation } from 'react-i18next'

const OnSiteDiscount: React.FC = () => {
  const { t } = useTranslation()
  const [discountType, setDiscountType] = useState<string>(
    t('discount.selectAll') as string
  )
  const [discount, setDiscount] = useState(onSiteDiscountData)
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
      setDiscount(onSiteDiscountData)
    } else {
      setDiscount(
        onSiteDiscountData.filter((data) => event.target.value === data.type)
      )
    }
  }
  return (
    <div>
      <Divider content={t('divider.onSiteDiscount') as string} />
      <Map discount={discount} />
      <select
        className='border border-gray-300 px-4 py-2 mt-4 rounded-md left-1/2 -translate-x-1/2'
        value={discountType}
        onChange={chooseDiscountTypeHandler}
      >
        {onSiteDiscountType.map((data) => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
      </select>
      <div>
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
