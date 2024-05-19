'use client'
import { sayingIcons } from '@/helper/constant'
import { ISaying } from '@/type/saying.type'
import { random } from 'lodash'
import Swal from 'sweetalert2'

interface IProps {
  name: string
  sayings: ISaying[]
}

export const RandomSaying = ({ name, sayings }: IProps) => {
  const chooseSayingHandler = () => {
    const index = random(0, sayingIcons.length - 1)
    const { title, text } = sayings[`${index}`]
    const { src } = sayingIcons[`${index}`]
    Swal.fire({
      title,
      text,
      imageUrl: src,
      imageAlt: title,
    })
  }
  return (
    <button
      onClick={chooseSayingHandler}
      className='
      relative border border-sky-500 left-1/2 -translate-x-1/2 text-sky-500 my-8 px-4 py-2 rounded-lg hover:text-white hover:bg-sky-500 cursor-pointer tracking-widest'
    >
      {name}
    </button>
  )
}
