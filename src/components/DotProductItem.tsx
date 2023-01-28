import { useTranslation } from 'react-i18next'

interface DotProductItemProps {
  data: {
    title: string
    creator?: string
    date?: string
    description: string
    imgUrl: string
    buyUrl: string
    type: string
  }
}

const DotProductItem: React.FC<DotProductItemProps> = ({ data }) => {
  const { title, creator, date, description, imgUrl, buyUrl, type } = data
  const buyHandler = () => {
    setTimeout(() => {
      window.open(buyUrl, '_blank')
    })
  }
  const { t } = useTranslation()

  return (
    <div className='my-8 flex flex-col items-center lg:flex-row'>
      <div className='border'>
        <img
          src={imgUrl}
          alt={title}
          className={`${type === 'book' ? 'w-96' : 'w-80'}`}
        />
      </div>
      <div className={`${type === 'book' ? '' : 'mx-8'} w-full `}>
        <div
          className='font-bold text-xl my-4 flex items-center justify-center cursor-pointer'
          onClick={buyHandler}
        >
          {title}
        </div>
        {(creator || date) && (
          <div className='flex justify-evenly items-center my-2'>
            {creator && <>{creator}</>}
            {date && (
              <div>
                {date}
                {t('dotProductItem.publish')}
              </div>
            )}
          </div>
        )}

        <div className='tracking-widest leading-loose my-4 text-justify'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default DotProductItem
