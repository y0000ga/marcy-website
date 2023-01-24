import axios from 'axios'

const youtubeKey = 'AIzaSyCOIV7ofPOEZtYDiz5wYLsg9y8LISB3dTA'

const youtubeURL = 'https://www.googleapis.com/youtube/v3'


export const youtubeGetInfoApi = async (id: string) => {
  try {
    const res = await axios.get(`${youtubeURL}/videos`, {
      params: {
        id: id,
        part: 'statistics',
        key: `${youtubeKey}`,
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
        key: `${youtubeKey}`,
      },
    })
    return res
  } catch (error) {
    console.error('[Youtube Get List Failed]: ', error)
    return error
  }
}
