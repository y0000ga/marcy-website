import Divider from '../Layout/Divider'
import Map from './Map'
import { discountTypeData, onSiteDiscountData } from '../wordingData'
import { useState } from 'react'
import DiscountItem from './DiscountItem'

const OnSiteDiscount: React.FC = () => {
  const [discountType, setDiscountType] = useState('請選擇優惠類別')
  const [discount, setDiscount] = useState(onSiteDiscountData)
  const onSiteDiscountType = [
    '請選擇優惠類別',
    '全部',
    discountTypeData[0],
    discountTypeData[2],
    discountTypeData[6],
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
      <Divider content='現場優惠區' />
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
