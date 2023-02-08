import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { weatherApi } from '../api/weatherApi'

const WeatherBox: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<string[]>()
  const { t } = useTranslation()
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
    <div className='h-10 flex justify-center items-center bg-red-500 overflow-hidden -z-10 w-full md:text-2xl'>
      <p className='inline-block text-white animate-marquee'>
        {t('weather.opening')}
        {currentWeather
          ? currentWeather?.join(t('weather.and') as string)
          : t('weather.undefined')}!
      </p>
    </div>
  )
}

export default WeatherBox
