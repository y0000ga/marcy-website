import Divider from '../Layout/Divider'
import { onlineDiscountData } from '../wordingData'
import { useState } from 'react'
import DiscountItem from './DiscountItem'
import { useTranslation } from 'react-i18next'

const OnlineDiscount: React.FC = () => {
  const { t } = useTranslation()
  const [discountType, setDiscountType] = useState<string>(
    t('discount.selectAll') as string
  )
  const [discount, setDiscount] = useState(onlineDiscountData)
  const onlineDiscountType = [
    t('discount.selectAll'),
    t('discount.all'),
    t('discountTypeData.0'),
    t('discountTypeData.1'),
    t('discountTypeData.2'),
    t('discountTypeData.3'),
    t('discountTypeData.4'),
    t('discountTypeData.5'),
  ]
  const chooseDiscountTypeHandler = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDiscountType(event.target.value)
    if (
      event.target.value === onlineDiscountType[0] ||
      event.target.value === onlineDiscountType[1]
    ) {
      setDiscount(onlineDiscountData)
    } else {
      setDiscount(
        onlineDiscountData.filter((data) => event.target.value === data.type)
      )
    }
  }
  return (
    <div>
      <Divider content={t('divider.onlineDiscount') as string} />
      <select
        className='border border-gray-300 px-4 py-2  rounded-md left-1/2 -translate-x-1/2'
        value={discountType}
        onChange={chooseDiscountTypeHandler}
      >
        {onlineDiscountType.map((data) => (
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
          />
        ))}
      </div>
    </div>
  )
}

export default OnlineDiscount
