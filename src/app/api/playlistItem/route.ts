import { YOUTUBE_CONTENT_API_URL } from '@/helper/constant'
import { IPlaylistItemReq, YoutubePart } from '@/type/api/youtube.type'
import { Status } from '@/type/common.type'
import axios from 'axios'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const playlistId = searchParams.get('playlistId')
    const pageToken = searchParams.get('pageToken')
    const part = YoutubePart.contentDetails
    const url = `${YOUTUBE_CONTENT_API_URL}/playlistItems?playlistId=${playlistId}&part=${part}&key=${
      process.env.GOOGLE_API_KEY
    }&maxResults=20${pageToken ? `&pageToken=${pageToken}` : ''}`

    const res = await axios(url)

    const final = res.data as IPlaylistItemReq

    return new Response(
      JSON.stringify({
        status: Status.success,
        data: { ...final },
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
