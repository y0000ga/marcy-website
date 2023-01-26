import { useTranslation } from 'react-i18next'
import { RxExternalLink } from 'react-icons/rx'
import { discountTypeData } from '../wordingData'

interface DiscountItemProps {
  title: string
  type: string
  url: string
  service: string
  method: string
  content: string
  address?: string
}

const DiscountItem: React.FC<DiscountItemProps> = ({
  title,
  type,
  url,
  service,
  method,
  content,
  address,
}) => {
  const { t } = useTranslation()
  return (
    <div className='my-4 tracking-widest'>
      <div className='flex items-center'>
        <div
          className={`border w-1/4 p-2 rounded-md font-light ${
            type === discountTypeData[0] && 'bg-red-100 border-red-500'
          } ${
            type === discountTypeData[1] && 'bg-orange-100 border-orange-500'
          } ${
            type === discountTypeData[2] && 'bg-yellow-100 border-yellow-500'
          } ${
            type === discountTypeData[3] && 'bg-green-100 border-green-500'
          } ${type === discountTypeData[4] && 'bg-blue-100 border-blue-500'} ${
            type === discountTypeData[5] && 'bg-cyan-100 border-cyan-500'
          } ${
            type === discountTypeData[6] && 'bg-purple-100 border-purple-500'
          }`}
        >
          {type}
        </div>
        <div className='w-3/4 font-semibold flex pl-2 items-center'>
          {title}
          <RxExternalLink
            className='cursor-pointer mx-2 hover:bg-sky-200 hover:border hover:rounded-sm text-xl'
            onClick={() => {
              setTimeout(() => {
                window.open(url, '_blank')
              })
            }}
          />
        </div>
      </div>
      <div className='p-2 leading-loose'>
        <div className='my-2'>{service}</div>
        <div className='my-2 '>
          {method}
          {t('discountItem.offer')}
          {content}
        </div>
        <div
          className='my-2 flex items-start cursor-pointer'
          onClick={() => {
            setTimeout(() => {
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${title}`,
                '_blank'
              )
            })
          }}
        >
          <div>🚩</div>
          {address}
        </div>
      </div>
    </div>
  )
}

export default DiscountItem
