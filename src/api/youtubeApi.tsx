import axios from 'axios'
import { youtubeAuth } from '../App'

const youtubeURL =
  'https://www.googleapis.com/youtube/v3'

export const youtubeGetInfoApi = async (id: string) => {
  try {
    const res = await axios.get(`${youtubeURL}/videos`, {
      params: {
        id: id,
        part: 'statistics',
        key: `${youtubeAuth}`,
      },
    })
    return res
  } catch (error) {
    console.error('[Youtube Get Info Failed]: ', error)
    return error
  }
}

export const youtubeGetChannelInfoApi = async (id: string) => {
  try {
    const res = await axios.get(`${youtubeURL}/channels`, {
      params: {
        part: 'snippet, statistics',
        id: id,
        key: `${youtubeAuth}`,
      },
    })
    return res
  } catch (error) {
    console.error('[Youtube Get List Failed]: ', error)
    return error
  }
}
