import { YOUTUBE_DATA_API_URL } from '@/helper/constant'
import { YoutubePart, IChannelRes } from '@/type/api/youtube.type'
import { Status } from '@/type/common.type'
import axios from 'axios'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const channelId = searchParams.get('channelId')
    const part = [YoutubePart.snippet, YoutubePart.statistics].join(',')
    const url = `${YOUTUBE_DATA_API_URL}/channels?id=${channelId}&part=${part}&key=${process.env.GOOGLE_API_KEY}`
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
