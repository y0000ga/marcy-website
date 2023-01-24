import Divider from '../Layout/Divider'
import { onlineDiscountData, discountTypeData } from '../wordingData'
import { useState } from 'react'
import DiscountItem from './DiscountItem'

const OnlineDiscount: React.FC = () => {
  const [discountType, setDiscountType] = useState('請選擇優惠類別')
  const [discount, setDiscount] = useState(onlineDiscountData)
  const onlineDiscountType = ['請選擇優惠類別', '全部', ...discountTypeData]
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
      <Divider content='線上優惠區' />
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
