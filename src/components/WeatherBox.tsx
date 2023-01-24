import { useEffect, useState } from 'react'
import { weatherApi } from '../api/weatherApi'

const WeatherBox: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<string[]>()
  useEffect(() => {
    const weatherInfo = async () => {
      const res = (await weatherApi()) as any
      const data = res.data.records.location[0].weatherElement
      const comfortIndex: string = data[3].time[1].parameter.parameterName
      const weatherInfo: string = data[0].time[1].parameter.parameterName
      setCurrentWeather([comfortIndex, weatherInfo])
    }
    weatherInfo()
  }, [])
  return (
    <div className='h-10 flex justify-center items-center bg-red-500 overflow-hidden -z-10'>
      <p className='inline-block text-white animate-marquee'>
        目前教主教母所在的天龍國
        {currentWeather ? currentWeather?.join('且') : '未知'}
      </p>
    </div>
  )
}

export default WeatherBox
