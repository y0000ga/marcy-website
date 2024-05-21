'use client'

import { useState } from 'react'
import { RxExternalLink } from 'react-icons/rx'
import { GOOGLE_MAP_SEARCH_URL } from '@/helper/constant'
import { IItemProps, IProps } from './index.type'
import { TypingHeader } from '../Typing'

export const Discount = ({
  isList,
  title,
  type,
  url,
  service,
  address,
  offer,
  colorClass,
}: IItemProps) => {
  return (
    <div
      className={`p-4 w-full tracking-widest ${
        isList ? 'md:w-1/2' : ''
      } flex flex-col animate-slow-shown gap-2`}
    >
      <p
        className={`border w-fit text-center p-2 rounded-md font-light ${colorClass}`}
      >
        {type}
      </p>
      <a
        className='font-semibold flex items-center'
        href={url}
        target='_blank'
      >
        {title}
        <RxExternalLink className='cursor-pointer mx-2 hover:bg-sky-200 hover:border hover:rounded-sm text-xl' />
      </a>
      {service}，{offer}。
      {address && (
        <a
          className=' flex items-start cursor-pointer hover:text-sky-500'
          href={`${GOOGLE_MAP_SEARCH_URL}${title}`}
          target='_blank'
        >
          🚩&nbsp;{address}
        </a>
      )}
    </div>
  )
}

export const DiscountCollection = ({ name, types, discounts }: IProps) => {
  const [type, setType] = useState<string>(types[0])

  return (
    <div className='relative'>
      <TypingHeader content={name} />
      <select
        className='border relative border-gray-300 px-4 py-2 my-8  rounded-md left-1/2 -translate-x-1/2'
        value={type}
        onChange={({ target }) => setType(target.value)}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div className='flex flex-wrap justify-between'>
        {discounts
          .filter((discount) => discount.type === type)
          .map(({ type, title, service, offer, url, colorClass, address }) => (
            <Discount
              key={title}
              title={title}
              type={type}
              url={url}
              service={service}
              offer={offer}
              colorClass={colorClass}
              isList={true}
              address={address}
            />
          ))}
      </div>
    </div>
  )
}
