import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const LngControl: React.FC = () => {
  const { i18n } = useTranslation()
  const lng = localStorage.getItem('lng')
  useEffect(() => {
    if (lng === 'null') {
      localStorage.setItem('lng', 'tw')
    }
  }, [lng])
  return (
    <li className='w-full h-12 flex justify-center items-center tracking-widest cursor-pointer xl:border-none xl:w-fit xl:mx-2'>
      <span
        className={`hover:text-blue-500 mx-2 ${
          lng === 'tw' && 'text-blue-500'
        }`}
        onClick={() => {
          i18n.changeLanguage('tw')
          localStorage.setItem('lng', 'tw')
        }}
      >
        繁中{' '}
      </span>{' '}
      |
      <span
        style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
        className={`hover:text-blue-500 mx-2  ${
          lng === 'cn' && 'text-blue-500'
        }`}
        onClick={() => {
          i18n.changeLanguage('cn')
          localStorage.setItem('lng', 'cn')
        }}
      >
        简中
      </span>
    </li>
  )
}

export default LngControl
