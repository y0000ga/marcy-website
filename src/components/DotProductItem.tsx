import { FaBook } from 'react-icons/fa'
import { MdProductionQuantityLimits } from 'react-icons/md'

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

  return (
    <div className='my-4'>
      <img src={imgUrl} alt={title} />
      <div className='font-bold text-xl text-center my-4'>{title}</div>
      {(creator || date) && (
        <div className='flex justify-evenly items-center my-2'>
          {creator && <div>{creator}</div>}
          {date && <div>{date}出版</div>}
        </div>
      )}
      {type === 'book' && (
        <FaBook className='w-full text-2xl my-4' onClick={buyHandler} />
      )}
      {type === 'create' && (
        <MdProductionQuantityLimits
          className='w-full text-2xl my-4'
          onClick={buyHandler}
        />
      )}

      <div className='tracking-widest leading-loose'>{description}</div>
    </div>
  )
}

export default DotProductItem
