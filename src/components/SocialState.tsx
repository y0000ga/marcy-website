import { AiOutlineEye, AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { BsPerson, BsCameraVideo } from 'react-icons/bs'

interface SocialStateProps {
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
}) => {
  return (
    <div className='flex text-md'>
      {subscriberCount && (
        <div className='flex items-center mx-2'>
          <BsPerson />
          <span className='mx-2'>{subscriberCount}</span>
        </div>
      )}
      {videoCount && (
        <div className='flex items-center mx-2'>
          <BsCameraVideo />
          <span className='mx-2'>{videoCount}</span>
        </div>
      )}
      <div className='flex items-center mx-2'>
        <AiOutlineEye />
        <span className='mx-2'>{viewCount}</span>
      </div>
      {likeCount && (
        <div className='flex items-center mx-2'>
          <AiOutlineLike />
          <span className='mx-2'>{likeCount}</span>
        </div>
      )}
      {commentCount && (
        <div className='flex items-center mx-2'>
          <AiOutlineComment />
          <span className='mx-2'>{commentCount}</span>
        </div>
      )}
    </div>
  )
}

export default SocialState
