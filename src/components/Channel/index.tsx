import Image from 'next/image'
import { SocialState } from '../SocialState'
import axios from 'axios'
import { IChannel } from '@/type/video.type'
import { YOUTUBE_CHANNEL_URL } from '@/helper/constant'
import { Loading } from '@/components/Loading'
import { SocialType } from '../SocialState/index.type'

interface IProps {
  id: string
}

export const Channel = async ({ id }: IProps) => {
  const { data: channelData } = await axios.request({
    method: 'GET',
    url: `${process.env.MARCY_API_URL}/channel`,
    params: { channelId: id },
  })

  const finalData = channelData.data as IChannel

  if (!finalData) {
    return <Loading />
  }

  const { imgSrc, title, statistics } = finalData

  const { videoCount, subscriberCount, viewCount } = statistics

  return (
    <a
      className='flex my-4 justify-center flex-col items-center p-4 rounded-lg'
      href={`${YOUTUBE_CHANNEL_URL}/${id}`}
      target='_blank'
    >
      <div className='flex justify-center items-center'>
        <span className='absolute w-24 h-24 bg-red-200 rounded-full animate-ping'></span>
        <span className='absolute w-20 h-20 bg-red-300 rounded-full animate-ping'></span>
        <Image
          src={imgSrc}
          alt='icon'
          width={200}
          height={200}
          className='cursor-pointer rounded-full w-20 h-20'
        />
      </div>
      <div className='font-bold text-2xl leading-loose tracking-widest cursor-pointer hover:text-sky-500'>
        {title}
      </div>
      <SocialState
        type={SocialType.channel}
        viewCount={viewCount}
        subscriberCount={subscriberCount}
        videoCount={videoCount}
      />
    </a>
  )
}
