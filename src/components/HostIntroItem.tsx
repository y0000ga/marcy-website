import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { useState } from 'react'

interface HostIntroItemProps {
  children: React.ReactNode
  title: string
}

const HostIntroItem: React.FC<HostIntroItemProps> = ({ children, title }) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <div className='leading-loose mt-4 text-justify'>
      <div className='text-xl text-neutral-600 font-bold flex flex-row justify-center items-center my-4'>
        {title}
        <div className='ml-2 cursor-pointer'>
          {isShown ? (
            <MdExpandMore
              onClick={() => {
                setIsShown(false)
              }}
            />
          ) : (
            <MdExpandLess
              onClick={() => {
                setIsShown(true)
              }}
            />
          )}
        </div>
      </div>
      {isShown ? (
        <ul className='list-inside list-decimal lg:flex lg:items-center'>{children}</ul>
      ) : undefined}
    </div>
  )
}

export default HostIntroItem
