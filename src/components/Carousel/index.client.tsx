'use client'

import React from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface ISlide {
  title: string
  imgSrc: string
  externalUrl?: string
}

interface IProps {
  slides: ISlide[]
}

export const Carousel = ({ slides }: IProps) => (
  <Swiper
    navigation
    pagination={{ type: 'fraction' }}
    autoplay={{ delay: 1000 }}
    loop
    modules={[Navigation, Pagination]}
    className='h-96 rounded-xl container'
  >
    {slides.map(({ imgSrc, externalUrl, title }, index) => (
      <SwiperSlide
        key={index}
        className='w-full overflow-hidden   cursor-pointer select-none '
      >
        {title && (
          <div className='w-full text-xl sm:text-2xl md:text-3xl lg:text-5xl absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center text-center items-center text-neutral-600 text-md font-black'>
            {title}
          </div>
        )}
        <Image
          src={imgSrc}
          alt={title}
          layout='fill'
          className='w-full -z-50 cursor-pointer opacity-40 transition-opacity'
          onClick={() => {
            if (externalUrl) {
              window.open(externalUrl, '_blank')
            }
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
)
