interface SayingItemProps {
  title:string
  description: string
}

const SayingItem:React.FC<SayingItemProps> = ({title, description}) => {
  return (
    <div className='mt-4'>
      <div className='w-fit absolute top-0 left-0 z-10 leading-4 text-white'>
        ◤
      </div>
      <div className='w-fit absolute top-0 left-0 z-10 leading-4 text-yellow-300'>
        ◢
      </div>
      <div
        className='leading-loose p-4 pt-6 text-justify bg-yellow-100 relative -z-10'
        key={title}
      >
        <span className='font-bold '>🔈 {title}</span>
        <br />
        {description}
      </div>
    </div>
  )
}

export default SayingItem