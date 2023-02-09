import Divider from '../Layout/Divider'
import { useState,useEffect,useMemo } from 'react'
import DiscountItem from './DiscountItem'
import { useTranslation } from 'react-i18next'



const OnlineDiscount: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  const onlineDiscount = useMemo(
    () => [
      {
        type: t('onlineDiscountData.0.type'),
        title: t('onlineDiscountData.0.title'),
        service: t('onlineDiscountData.0.service'),
        method: t('onlineDiscountData.0.method'),
        content: t('onlineDiscountData.0.content'),
        url: 'https://www.facebook.com/SyuanDrew',
      },
      {
        type: t('onlineDiscountData.1.type'),
        title: t('onlineDiscountData.1.title'),
        service: t('onlineDiscountData.1.service'),
        method: t('onlineDiscountData.1.method'),
        content: t('onlineDiscountData.1.content'),
        url: '',
      },
      {
        type: t('onlineDiscountData.2.type'),
        title: t('onlineDiscountData.2.title'),
        service: t('onlineDiscountData.2.service'),
        method: t('onlineDiscountData.2.method'),
        content: t('onlineDiscountData.2.content'),
        url: 'https://www.michi.com.tw/',
      },
      {
        type: t('onlineDiscountData.3.type'),
        title: t('onlineDiscountData.3.title'),
        service: t('onlineDiscountData.3.service'),
        method: t('onlineDiscountData.3.method'),
        content: t('onlineDiscountData.3.content'),
        url: 'https://www.instagram.com/dong_ba_3/',
      },
      {
        type: t('onlineDiscountData.4.type'),
        title: t('onlineDiscountData.4.title'),
        service: t('onlineDiscountData.4.service'),
        method: t('onlineDiscountData.4.method'),
        content: t('onlineDiscountData.4.content'),
        url: 'https://www.gainteng.com.tw/gainteng/index.php',
      },
      {
        type: t('onlineDiscountData.5.type'),
        title: t('onlineDiscountData.5.title'),
        service: t('onlineDiscountData.5.service'),
        method: t('onlineDiscountData.5.method'),
        content: t('onlineDiscountData.5.content'),
        url: 'https://shopee.tw/product/24789910/4012300724?smtt=0.24791246-1625977633.9',
      },
      {
        type: t('onlineDiscountData.6.type'),
        title: t('onlineDiscountData.6.title'),
        service: t('onlineDiscountData.6.service'),
        method: t('onlineDiscountData.6.method'),
        content: t('onlineDiscountData.6.content'),
        url: 'http://www.jxleather.com.tw/index.aspx',
      },
      {
        type: t('onlineDiscountData.7.type'),
        title: t('onlineDiscountData.7.title'),
        service: t('onlineDiscountData.7.service'),
        method: t('onlineDiscountData.7.method'),
        content: t('onlineDiscountData.7.content'),
        url: 'https://www.dearface.tw/',
      },
      {
        type: t('onlineDiscountData.8.type'),
        title: t('onlineDiscountData.8.title'),
        service: t('onlineDiscountData.8.service'),
        method: t('onlineDiscountData.8.method'),
        content: t('onlineDiscountData.8.content'),
        url: 'https://shopee.tw/woosox',
      },
      {
        type: t('onlineDiscountData.9.type'),
        title: t('onlineDiscountData.9.title'),
        service: t('onlineDiscountData.9.service'),
        method: t('onlineDiscountData.9.method'),
        content: t('onlineDiscountData.9.content'),
        url: 'https://www.instagram.com/accessoriesbyleaf/',
      },
      {
        type: t('onlineDiscountData.10.type'),
        title: t('onlineDiscountData.10.title'),
        service: t('onlineDiscountData.10.service'),
        method: t('onlineDiscountData.10.method'),
        content: t('onlineDiscountData.10.content'),
        url: 'https://www.pinkoi.com/store/trianglewoods',
      },
      {
        type: t('onlineDiscountData.11.type'),
        title: t('onlineDiscountData.11.title'),
        service: t('onlineDiscountData.11.service'),
        method: t('onlineDiscountData.11.method'),
        content: t('onlineDiscountData.11.content'),
        url: 'https://www.pinkoi.com/store/fernonly',
      },
      {
        type: t('onlineDiscountData.12.type'),
        title: t('onlineDiscountData.12.title'),
        service: t('onlineDiscountData.12.service'),
        method: t('onlineDiscountData.12.method'),
        content: t('onlineDiscountData.12.content'),
        url: 'https://www.facebook.com/theAxiomStore/',
      },
      {
        type: t('onlineDiscountData.13.type'),
        title: t('onlineDiscountData.13.title'),
        service: t('onlineDiscountData.13.service'),
        method: t('onlineDiscountData.13.method'),
        content: t('onlineDiscountData.13.content'),
        url: 'https://www.instagram.com/oh_tsubaki/',
      },
      {
        type: t('onlineDiscountData.14.type'),
        title: t('onlineDiscountData.14.title'),
        service: t('onlineDiscountData.14.service'),
        method: t('onlineDiscountData.14.method'),
        content: t('onlineDiscountData.14.content'),
        url: 'https://www.instagram.com/oohyesthanku/',
      },
      {
        type: t('onlineDiscountData.15.type'),
        title: t('onlineDiscountData.15.title'),
        service: t('onlineDiscountData.15.service'),
        method: t('onlineDiscountData.15.method'),
        content: t('onlineDiscountData.15.content'),
        url: 'https://www.instagram.com/kojima_masato/',
      },
      {
        type: t('onlineDiscountData.16.type'),
        title: t('onlineDiscountData.16.title'),
        service: t('onlineDiscountData.16.service'),
        method: t('onlineDiscountData.16.method'),
        content: t('onlineDiscountData.16.content'),
        url: 'https://instagram.com/niconico_design/',
      },
      {
        type: t('onlineDiscountData.17.type'),
        title: t('onlineDiscountData.17.title'),
        service: t('onlineDiscountData.17.service'),
        method: t('onlineDiscountData.17.method'),
        content: t('onlineDiscountData.17.content'),
        url: 'https://www.instagram.com/j_h_painting',
      },
      {
        type: t('onlineDiscountData.18.type'),
        title: t('onlineDiscountData.18.title'),
        service: t('onlineDiscountData.18.service'),
        method: t('onlineDiscountData.18.method'),
        content: t('onlineDiscountData.18.content'),
        url: 'https://instagram.com/g.diandian',
      },
      {
        type: t('onlineDiscountData.19.type'),
        title: t('onlineDiscountData.19.title'),
        service: t('onlineDiscountData.19.service'),
        method: t('onlineDiscountData.19.method'),
        content: t('onlineDiscountData.19.content'),
        url: 'https://www.pinkoi.com/store/adorerdesign',
      },
      {
        type: t('onlineDiscountData.20.type'),
        title: t('onlineDiscountData.20.title'),
        service: t('onlineDiscountData.20.service'),
        method: t('onlineDiscountData.20.method'),
        content: t('onlineDiscountData.20.content'),
        url: 'https://www.joywhenflowers.com/',
      },
    ],
    [t]
  )

  useEffect(() => {
    i18n.changeLanguage(lng)
    setDiscountType(onlineDiscountType[0])
    setDiscount(onlineDiscount)
  }, [i18n, lng])

  const [discountType, setDiscountType] = useState<string>(
    t('discount.selectAll') as string
  )
  
  
  const [discount, setDiscount] = useState(onlineDiscount)
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
      setDiscount(onlineDiscount)
    } else {
      setDiscount(
        onlineDiscount.filter((data) => event.target.value === data.type)
      )
    }
  }
  return (
    <div>
      <Divider content={t('divider.onlineDiscount') as string} />
      <select
        className='border border-gray-300 px-4 py-2 my-8  rounded-md left-1/2 -translate-x-1/2'
        value={discountType}
        onChange={chooseDiscountTypeHandler}
      >
        {onlineDiscountType.map((data) => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
      </select>
      <div className='flex flex-wrap justify-between'>
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
