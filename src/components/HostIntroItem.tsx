import { forwardRef } from 'react'
interface HostIntroItemProps {
  children: React.ReactNode
  title: string
}

const HostIntroItem = forwardRef<HTMLDivElement, HostIntroItemProps>(
  (props, ref) => {
    return (
      <div className='leading-loose mt-4 text-justify' ref={ref}>
        <div className='text-xl text-neutral-600 font-bold flex flex-row justify-center items-center my-4'>
          {props.title}
        </div>
        <ul className='list-inside list-decimal lg:flex lg:items-center'>
          {props.children}
        </ul>
      </div>
    )
  }
)

export default HostIntroItem
