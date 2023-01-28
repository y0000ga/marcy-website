import { youtubeGetInfoApi } from '../api/youtubeApi'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { youtubeBaseEmbedUrl } from '../wordingData'
import SocialState from './SocialState'

interface YoutubeDisplayBoxProps {
  title: string
  id: string
  description: string
  quote?: string[]
  comment?: string
  start?: string
}

type staticsDataType = {
  commentCount: string
  likeCount: string
  viewCount: string
}

const YoutubeDisplayBox: React.FC<YoutubeDisplayBoxProps> = ({
  title,
  id,
  description,
  quote,
  comment,
  start,
}) => {
  const [staticsData, setStaticsData] = useState<staticsDataType>()
  const { t } = useTranslation()
  useEffect(() => {
    const youtubeGetInfo = async () => {
      const res = (await youtubeGetInfoApi(id)) as any
      setStaticsData(res.data.items[0].statistics)
    }
    youtubeGetInfo()
  }, [id])

  const src = start
    ? `${youtubeBaseEmbedUrl}${id}?start=${start}`
    : `${youtubeBaseEmbedUrl}${id}`

  return (
    <div className='lg:flex my-8'>
      <div className='relative w-full h-96 pb-1 lg:w-96 lg:mr-8'>
        <iframe
          className='top-0 left-0 w-full h-full lg:w-96'
          src={src}
          title={title}
          allowFullScreen={true}
        />
      </div>
      <div className='w-full flex flex-col justify-center'>
        <div className='my-4 font-bold text-center tracking-widest text-xl'>
          {title}
        </div>
        <SocialState
          viewCount={staticsData?.viewCount as string}
          likeCount={staticsData?.likeCount as string}
          commentCount={staticsData?.commentCount as string}
        />
        <div className='leading-loose my-4 text-justify'>{description}</div>
        <ul className='leading-loose my-4 text-justify'>
          {quote?.map((data) => (
            <li className='bg-yellow-100 my-4 px-4' key={data}>
              🗣{data}
            </li>
          ))}
        </ul>
        {comment && comment.length !== 0 && (
          <div className='leading-loose my-4 text-justify text-sky-500'>
            {t('good')} 👍 {comment}
          </div>
        )}
      </div>
    </div>
  )
}

export default YoutubeDisplayBox
