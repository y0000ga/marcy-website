
import { YOUTUBE_DATA_API_URL } from '@/helper/constant'
import { YoutubePart, ICommentThreadRes } from '@/type/api/youtube.type'
import { Status } from '@/type/common.type'

import axios from 'axios'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const videoId = searchParams.get('videoId')
    const res = await axios(
      `${YOUTUBE_DATA_API_URL}/commentThreads`,
      {
        params: {
          videoId,
          part: YoutubePart.snippet,
          key: process.env.GOOGLE_API_KEY,
          order: 'relevance',
          maxResults: 5,
        },
      }
    )

    const { items } = res.data as ICommentThreadRes

    const comments = items.map((item) => {
      const { id, snippet } = item.snippet.topLevelComment
      const { textDisplay, authorDisplayName } = snippet
      return { id, textDisplay, author: authorDisplayName }
    })

    return new Response(
      JSON.stringify({
        status: Status.success,
        data: { comments },
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
