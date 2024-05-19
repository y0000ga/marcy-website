import { YOUTUBE_DATA_API_URL } from '@/helper/constant'
import { YoutubePart, IChannelRes } from '@/type/api/youtube.type'
import { Status } from '@/type/common.type'
import axios from 'axios'

const createUrl = ({ url }: Request) => {
  const copiedUrl = url
  const { searchParams } = new URL(copiedUrl)
  const channelId = searchParams.get('channelId')
  const part = [YoutubePart.snippet, YoutubePart.statistics].join(',')
  return `${YOUTUBE_DATA_API_URL}/channels?id=${channelId}&part=${part}&key=${process.env.GOOGLE_API_KEY}`
}

export const GET = async (req: Request) => {
  const url = createUrl(req)
  try {
    const res = await axios(url)
    const { items } = res.data as IChannelRes
    const { snippet, statistics, id } = items[0]
    const { thumbnails, title } = snippet
    const { viewCount, subscriberCount, videoCount } = statistics

    return new Response(
      JSON.stringify({
        status: Status.success,
        data: {
          statistics: { viewCount, subscriberCount, videoCount },
          imgSrc: thumbnails.default.url,
          title,
          id,
        },
      }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: Status.failed,
        message: '[Youtube get comment failed]',
        error,
      }),
      {
        status: 200,
      }
    )
  }
}
