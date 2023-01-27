import { useTranslation } from 'react-i18next'
import { RxExternalLink } from 'react-icons/rx'

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
  const discountTypes = [
    t('discountTypeData.0'),
    t('discountTypeData.1'),
    t('discountTypeData.2'),
    t('discountTypeData.3'),
    t('discountTypeData.4'),
    t('discountTypeData.5'),
    t('discountTypeData.6'),
  ]
  return (
    <div className='my-4 w-full tracking-widest md:w-1/2 flex flex-col animate-slowShown'>
      <div className='flex items-center'>
        <div
          className={`border w-fit p-2 rounded-md font-light ${
            type === discountTypes[0] && 'bg-red-100 border-red-500'
          } ${type === discountTypes[1] && 'bg-orange-100 border-orange-500'} ${
            type === discountTypes[2] && 'bg-yellow-100 border-yellow-500'
          } ${type === discountTypes[3] && 'bg-green-100 border-green-500'} ${
            type === discountTypes[4] && 'bg-blue-100 border-blue-500'
          } ${type === discountTypes[5] && 'bg-cyan-100 border-cyan-500'} ${
            type === discountTypes[6] && 'bg-purple-100 border-purple-500'
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
        {address && (
          <div
            className='my-2 flex items-start cursor-pointer hover:text-sky-500'
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
        )}
      </div>
    </div>
  )
}

export default DiscountItem
