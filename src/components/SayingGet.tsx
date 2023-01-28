import SayingIcon_1 from '../assets/SayingIcon/SayingIcon (1).png'
import SayingIcon_2 from '../assets/SayingIcon/SayingIcon (2).png'
import SayingIcon_3 from '../assets/SayingIcon/SayingIcon (3).png'
import SayingIcon_4 from '../assets/SayingIcon/SayingIcon (4).png'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import SayingItem from './SayingItem'

const sayingIcons = [SayingIcon_1, SayingIcon_2, SayingIcon_3, SayingIcon_4]

const SayingGet: React.FC = () => {
  const { t } = useTranslation()

  const dotSayingData = [
    {
      title: t('dotSayingData.0.title'),
      description: t('dotSayingData.0.description'),
    },
    {
      title: t('dotSayingData.1.title'),
      description: t('dotSayingData.1.description'),
    },
    {
      title: t('dotSayingData.2.title'),
      description: t('dotSayingData.2.description'),
    },
    {
      title: t('dotSayingData.3.title'),
      description: t('dotSayingData.3.description'),
    },
    {
      title: t('dotSayingData.4.title'),
      description: t('dotSayingData.4.description'),
    },
    {
      title: t('dotSayingData.5.title'),
      description: t('dotSayingData.5.description'),
    },
    {
      title: t('dotSayingData.6.title'),
      description: t('dotSayingData.6.description'),
    },
    {
      title: t('dotSayingData.7.title'),
      description: t('dotSayingData.7.description'),
    },
    {
      title: t('dotSayingData.8.title'),
      description: t('dotSayingData.8.description'),
    },
    {
      title: t('dotSayingData.9.title'),
      description: t('dotSayingData.9.description'),
    },
    {
      title: t('dotSayingData.10.title'),
      description: t('dotSayingData.10.description'),
    },
    {
      title: t('dotSayingData.11.title'),
      description: t('dotSayingData.11.description'),
    },
    {
      title: t('dotSayingData.12.title'),
      description: t('dotSayingData.12.description'),
    },
    {
      title: t('dotSayingData.13.title'),
      description: t('dotSayingData.13.description'),
    },
    {
      title: t('dotSayingData.14.title'),
      description: t('dotSayingData.14.description'),
    },
    {
      title: t('dotSayingData.15.title'),
      description: t('dotSayingData.15.description'),
    },
    {
      title: t('dotSayingData.16.title'),
      description: t('dotSayingData.16.description'),
    },
    {
      title: t('dotSayingData.17.title'),
      description: t('dotSayingData.17.description'),
    },
    {
      title: t('dotSayingData.18.title'),
      description: t('dotSayingData.18.description'),
    },
    {
      title: t('dotSayingData.19.title'),
      description: t('dotSayingData.19.description'),
    },
    {
      title: t('dotSayingData.20.title'),
      description: t('dotSayingData.20.description'),
    },
    {
      title: t('dotSayingData.21.title'),
      description: t('dotSayingData.21.description'),
    },
    {
      title: t('dotSayingData.22.title'),
      description: t('dotSayingData.22.description'),
    },
  ]

  const [sayingIndex, setSayingIndex] = useState<number[]>([
    Math.floor(Math.random() * sayingIcons.length),
    Math.floor(Math.random() * dotSayingData.length),
  ])

  const chooseSayingHandler = () => {
    setSayingIndex([
      Math.floor(Math.random() * sayingIcons.length),
      Math.floor(Math.random() * dotSayingData.length),
    ])
    Swal.fire({
      title: dotSayingData[sayingIndex[1]].title,
      text: dotSayingData[sayingIndex[1]].description,
      imageUrl: sayingIcons[sayingIndex[0]],
      imageAlt: 'saying icon',
    })
  }

  return (
    <div className='leading-loose my-4 text-justify'>
      {t('sayingGet.opening')}
      <div
        onClick={chooseSayingHandler}
        className='border border-sky-500 text-sky-500 w-fit  left-1/2 -translate-x-1/2 my-8 px-4 py-2 rounded-lg hover:text-white hover:bg-sky-500 cursor-pointer tracking-widest'
      >
        {t('sayingGet.buttonContent')}
      </div>
      <div className='mt-4'>{t('sayingGet.allSaying')}</div>
      {dotSayingData.map((data) => (
        <SayingItem
          title={data.title}
          description={data.description}
          key={data.title}
        />
      ))}
    </div>
  )
}

export default SayingGet
