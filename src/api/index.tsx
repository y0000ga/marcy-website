import axios from 'axios'

const youtubeKey = 'AIzaSyCOIV7ofPOEZtYDiz5wYLsg9y8LISB3dTA'

const youtubeURL = 'https://www.googleapis.com/youtube/v3'

export const weatherApi = async () => {
  try {
    const res = await axios.get(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E8AA8563-C728-495D-84CC-5E8823B5ABE0&locationName=%E8%87%BA%E5%8C%97%E5%B8%82'
    )

    return res
  } catch (error) {
    console.error('[Weather Failed]: ', error)
    return error
  }
}

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
    console.error('[Youtube Failed]: ', error)
    return error
  }
}
