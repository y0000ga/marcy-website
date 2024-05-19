import Image from 'next/image'
import seal from '/public/assets/Figure/seal.png'
import { IProps, SayingType } from './index.type'

const icons = ['◤', '◢']

export const Saying = ({ title, text, type }: IProps) => (
  <li className='mt-4 relative'>
    {type === SayingType.dictionary && (
      <Image
        src={seal}
        alt='seal'
        className='absolute w-10 -right-2 -top-2 animate-spin'
      />
    )}
    {icons.map((icon, index) => (
      <div
        key={icon}
        className={`w-fit absolute top-0 left-0 z-10 leading-4 ${
          index === 0 ? 'text-white' : 'text-yellow-300'
        }`}
      >
        {icon}
      </div>
    ))}
    <div
      className={`leading-loose p-4 pt-6 text-justify bg-yellow-100 relative -z-10 ${
        type === SayingType.dictionary ? 'underline underline-offset-8' : ''
      }`}
      key={title}
    >
      <span className='font-bold '>🔈 {title}</span>
      <br />
      {text}
    </div>
  </li>
)
