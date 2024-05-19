
import { YOUTUBE_DATA_API_URL } from '@/helper/constant'
import { YoutubePart, IVideoRes } from '@/type/api/youtube.type'
import { Status } from '@/type/common.type'
import axios from 'axios'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const part = [YoutubePart.snippet, YoutubePart.statistics].join(',')
    const url = `${YOUTUBE_DATA_API_URL}/videos?id=${id}&part=${part}&key=${process.env.GOOGLE_API_KEY}`
    const res = await axios(url)
    const { items } = res.data as IVideoRes
    const { snippet, statistics } = items[0]
    const { title, description } = snippet

    return new Response(
      JSON.stringify({
        status: Status.success,
        data: { statistics, title, description },
      }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: Status.failed,
        message: '[Youtube get videos failed]',
        error,
      }),
      {
        status: 200,
      }
    )
  }
}
