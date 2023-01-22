import { youtubeGetInfoApi } from '../api'
import { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineLike, AiOutlineComment } from 'react-icons/ai'

interface YoutubeDisplayBoxProps {
  title: string
  id: string
  description: string
  quote?: string[]
  comment?: string
  start?: string
}

const youtubeBaseEmbedUrl = 'https://www.youtube.com/embed/'

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
    <>
      <div className='relative w-full h-96 pb-1'>
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src={src}
          title={title}
          allowFullScreen={true}
        />
      </div>
      <div className='my-4 font-bold text-center tracking-widest text-xl'>
        {title}
      </div>
      <div className='flex text-xl justify-center'>
        <div className='flex items-center mx-2'>
          <AiOutlineEye />
          <span className='mx-2'>{staticsData?.viewCount}</span>
        </div>
        <div className='flex items-center mx-2'>
          <AiOutlineLike />
          <span className='mx-2'>{staticsData?.likeCount}</span>
        </div>
        <div className='flex items-center mx-2'>
          <AiOutlineComment />
          <span className='mx-2'>{staticsData?.commentCount}</span>
        </div>
      </div>
      <div className='leading-loose my-4 text-justify'>{description}</div>
      <ul className='leading-loose my-4 text-justify'>
        {quote?.map((data) => (
          <li className='bg-yellow-100 my-4' key={data}>
            🗣{data}
          </li>
        ))}
      </ul>
      {comment && comment.length !== 0 && (
        <div className='leading-loose my-4 text-justify text-sky-500'>
          網友大讚 👍 {comment}
        </div>
      )}
    </>
  )
}

export default YoutubeDisplayBox
