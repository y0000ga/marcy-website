import { OPEN_DATA_API_URL } from '@/helper/constant'
import { ElementName } from '@/type/api/weather.type'
import { Status } from '@/type/common.type'
import axios from 'axios'

export const GET = async () => {
  try {
    const res = await axios(
      `${OPEN_DATA_API_URL}?Authorization=${process.env.OPEN_WEATHER_API_KEY}&format=JSON&locationName=臺北市&elementName=${ElementName.WD}`
    )

    const weather =
      res.data.records.locations[0].location[0].weatherElement[0].time[0]
        .elementValue[0].value

    return new Response(
      JSON.stringify({ status: Status.success, data: { weather } }),
      {
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: Status.failed,
        message: '[get weather failed]',
        error,
      }),
      { status: 500 }
    )
  }
}
