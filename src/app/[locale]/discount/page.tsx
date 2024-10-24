import { DiscountCollection } from '@/components/DiscountCollection/index.client'
import { Map } from '@/components/Map/index.client'
import { discountList } from '@/helper/constant'
import initTranslations from '@/i18n'
import { IPage } from '@/type/common.type'
import { range } from 'lodash'

const colorClasses = [
  'bg-red-100 border-red-500',
  'bg-orange-100 border-orange-500',
  'bg-yellow-100 border-yellow-500',
  'bg-green-100 border-green-500',
  'bg-blue-100 border-blue-500',
  'bg-cyan-100 border-cyan-500',
  'bg-purple-100 border-purple-500',
]

const Page = async ({ params }: IPage) => {
  const { locale } = params
  const { t } = await initTranslations(locale)
  const types = range(0, 7).map((num) => t(`discountTypeData.${num}`))

  const onlineDiscounts = discountList.online.map(({ url }, index) => {
    const type = t(`onlineDiscountData.${index}.type`)
    const i = types.indexOf(type)
    return {
      color: colorClasses[i].split(' ')[0].split('-')[1],
      type,
      title: t(`onlineDiscountData.${index}.title`),
      service: t(`onlineDiscountData.${index}.service`),
      offer: t(`onlineDiscountData.${index}.method`),
      url,
      colorClass: colorClasses[i],
    }
  })

  const onSiteDiscounts = discountList.onSite.map(
    ({ url, location }, index) => {
      const type = t(`onSiteDiscountData.${index}.type`)
      const i = types.indexOf(type)
      return {
        color: colorClasses[i].split(' ')[0].split('-')[1],
        type,
        title: t(`onSiteDiscountData.${index}.title`),
        service: t(`onSiteDiscountData.${index}.service`),
        offer: t(`onSiteDiscountData.${index}.method`),
        address: t(`onSiteDiscountData.${index}.address`),
        url,
        location,
        colorClass: colorClasses[i],
      }
    }
  )
  return (
    <div className='leading-loose mt-4 text-justify'>
      {t('pageOpeningData.discount.0')}
      <DiscountCollection
        name={t('divider.onlineDiscount')}
        types={types}
        discounts={onlineDiscounts}
      />
      <Map discounts={onSiteDiscounts} />
      <DiscountCollection
        name={t('divider.onSiteDiscount')}
        types={types}
        discounts={onSiteDiscounts}
      />
    </div>
  )
}

export default Page
