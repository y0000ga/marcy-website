import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

interface SingleLngProps {
  lngShort: string
  lngName: string
}

const SingleLng: React.FC<SingleLngProps> = ({ lngShort, lngName }) => {
  const { i18n } = useTranslation()
  const lng = localStorage.getItem('lng')
  return (
    <span
      className={`hover:text-blue-500 ${lng === lngShort && 'text-blue-500'} mx-2`}
      onClick={() => {
        i18n.changeLanguage(lngShort)
        localStorage.setItem('lng', lngShort)
      }}
    >
      {lngName}
    </span>
  )
}

const LngControl: React.FC = () => {
  const lng = localStorage.getItem('lng')
  useEffect(() => {
    if (lng === 'null') {
      localStorage.setItem('lng', 'tw')
    }
  }, [lng])
  return (
    <li
      className={`w-full h-12 flex justify-center items-center tracking-widest border-b cursor-pointer hover:text-blue-500 xl:border-none xl:w-fit mx-2 `}
    >
      <SingleLng lngName='繁中' lngShort='tw' />
      |
      <SingleLng lngName='簡中' lngShort='cn' />
    </li>
  )
}

export default LngControl
