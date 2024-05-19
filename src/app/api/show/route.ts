import { SPOTIFY_API_URL } from '@/helper/constant'
import { Status } from '@/type/common.type'
import axios from 'axios'

const createUrl = ({ url }: Request) => {
  const copiedUrl = url
  const { searchParams } = new URL(copiedUrl)
  const showId = searchParams.get('showId')
  return `${SPOTIFY_API_URL}/shows/${showId}`
}

export const GET = async (req: Request) => {
  const url = createUrl(req)
  try {
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
