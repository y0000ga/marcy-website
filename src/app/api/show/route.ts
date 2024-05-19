import { SPOTIFY_API_URL } from '@/helper/constant'
import { Status } from '@/type/common.type'
import axios from 'axios'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const showId = searchParams.get('showId')
    const url = `${SPOTIFY_API_URL}/shows/${showId}`
    const res = await axios(url, {
      headers: {
        Authorization: '', // TODO: 本來要串接 Spotify，但內容一定要登入，所以之後再重新想怎麼用
      },
    })

    return new Response(
      JSON.stringify({
        status: Status.success,
        data: { ...res.data },
      }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: Status.failed,
        message: '[Spotify get Show failed]',
        error,
      }),
      {
        status: 200,
      }
    )
  }
}
