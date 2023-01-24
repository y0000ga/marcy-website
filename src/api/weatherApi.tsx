import axios from 'axios'

const weatherAuth = 'CWB-E8AA8563-C728-495D-84CC-5E8823B5ABE0'

export const weatherApi = async () => {
  try {
    const res = await axios.get(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${weatherAuth}&locationName=%E8%87%BA%E5%8C%97%E5%B8%82`
    )

    return res
  } catch (error) {
    console.error('[Weather Failed]: ', error)
    return error
  }
}
