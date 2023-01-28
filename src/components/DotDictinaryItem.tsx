import seal from '../assets/Figure/seal.png'

interface DotDictionaryItemProps {
  title: string
  description: string
}

const DotDictionaryItem: React.FC<DotDictionaryItemProps> = ({
  title,
  description,
}) => {
  return (
    <li
      className='my-4 py-4 px-8 md:border-r-8 md:border-l-8 md:border-white bg-yellow-100 md:w-1/2 underline underline-offset-8'
    >
      <img
        src={seal}
        alt='seal'
        className='absolute w-10 -right-2 -top-2 animate-spin'
      />
      <div className='w-fit absolute top-0 left-0 z-10 leading-4 text-white'>
        ◤
      </div>
      <div className='w-fit absolute top-0 left-0 z-10 leading-4 text-yellow-300'>
        ◢
      </div>
      <span className='font-semibold'>{title}</span>
      <br />
      {description}
    </li>
  )
}

export default DotDictionaryItem
