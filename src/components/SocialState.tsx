import { AiOutlineEye, AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { BsPerson, BsCameraVideo } from 'react-icons/bs'

interface SocialStateProps {
  type: string
  viewCount: string
  likeCount?: string
  commentCount?: string
  subscriberCount?: string
  videoCount?: string
}

const SocialState: React.FC<SocialStateProps> = ({
  viewCount,
  likeCount,
  commentCount,
  subscriberCount,
  videoCount,
  type,
}) => {
  return (
    <div className='flex text-md'>
      {type === 'channel' && (
        <div className='flex items-center mx-2'>
          <BsPerson />
          <span className='mx-2'>
            {subscriberCount ? subscriberCount : '999'}
          </span>
        </div>
      )}
      {type === 'channel' && (
        <div className='flex items-center mx-2'>
          <BsCameraVideo />
          <span className='mx-2'>{videoCount ? videoCount : '999'}</span>
        </div>
      )}
      <div className='flex items-center mx-2'>
        <AiOutlineEye />
        <span className='mx-2'>{viewCount}</span>
      </div>
      {type === 'youtube' && (
        <div className='flex items-center mx-2'>
          <AiOutlineLike />
          <span className='mx-2'>{likeCount ? likeCount : '999'}</span>
        </div>
      )}
      {type === 'youtube' && (
        <div className='flex items-center mx-2'>
          <AiOutlineComment />
          <span className='mx-2'>{commentCount ? commentCount : '999'}</span>
        </div>
      )}
    </div>
  )
}

export default SocialState
