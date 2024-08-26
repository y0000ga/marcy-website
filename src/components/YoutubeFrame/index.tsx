import { httpRegex, tagRegex } from '@/helper/constant'
import { YouTubeEmbed } from '@next/third-parties/google'
import { IVideo } from '@/type/video.type'
import axios from 'axios'
import { SocialState } from '../SocialState'
import { Loading } from '@/components/Loading'
import { SocialType } from '../SocialState/index.type'

interface IProps {
  id: string
}

export const YoutubeFrame = async ({ id }: IProps) => {
  const { data: videoData } = await axios.request({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_MARCY_API_URL}/video`,
    params: { id },
  })

  const finalData = videoData.data as IVideo

  if (!finalData) {
    return <Loading />
  }

  const { title, description, statistics } = finalData

  const { commentCount, viewCount, likeCount } = statistics

  // const { data: commentData } = await axios.request({
  //   method: 'GET',
  //   url: `/comment`,
  //   params: { videoId: id },
  // })

  // TODO: 之後再引入顯示留言
  // const { comments } = commentData.data as IComment

  const filteredDescription = description
    .split('\n')
    .map((item) => (httpRegex.test(item) || tagRegex.test(item) ? '' : item))

  return (
    <div className='lg:flex my-8'>
      <div className='relative top-0 left-0 w-full h-96 pb-1 lg:w-96 lg:mr-8'>
        <YouTubeEmbed videoid={id} />
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='my-4 font-bold text-center tracking-widest text-xl'>
          {title}
        </div>
        <SocialState
          type={SocialType.video}
          viewCount={viewCount}
          likeCount={likeCount}
          commentCount={commentCount}
        />
        <p className='leading-loose my-4 text-justify'>{filteredDescription}</p>
      </div>
    </div>
  )
}
