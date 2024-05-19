import { YOUTUBE_CONTENT_API_URL } from '@/helper/constant'
import { IPlaylistItemReq, YoutubePart } from '@/type/api/youtube.type'
import { Status } from '@/type/common.type'
import axios from 'axios'

const createUrl = ({ url }: Request) => {
  const copiedUrl = url
  const { searchParams } = new URL(copiedUrl)
  const playlistId = searchParams.get('playlistId')
  const pageToken = searchParams.get('pageToken')
  const part = YoutubePart.contentDetails
  return `${YOUTUBE_CONTENT_API_URL}/playlistItems?playlistId=${playlistId}&part=${part}&key=${
    process.env.GOOGLE_API_KEY
  }&maxResults=6${pageToken ? `&pageToken=${pageToken}` : ''}`
}

export const GET = async (req: Request) => {
  const url = createUrl(req)
  try {
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
        message: '[Youtube get playlistItem failed]',
        error,
      }),
      {
        status: 200,
      }
    )
  }
}
