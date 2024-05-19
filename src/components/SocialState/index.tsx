import { AiOutlineEye, AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { BsPerson, BsCameraVideo } from 'react-icons/bs'
import { IItemProps, IProps, SocialType } from './index.type'
import { IWrapper } from '@/type/common.type'

const Container = ({ children }: IWrapper) => (
  <div className='flex text-md'>{children}</div>
)

const Item = ({ content, children }: IItemProps) => (
  <div className='flex items-center mx-2'>
    {children}
    <span className='mx-2'>{content || '-'}</span>
  </div>
)

export const SocialState = ({
  viewCount,
  likeCount,
  commentCount,
  subscriberCount,
  videoCount,
  type,
}: IProps) => {
  if (type === SocialType.channel) {
    return (
      <Container>
        <Item content={viewCount}>
          <AiOutlineEye />
        </Item>
        <Item content={subscriberCount}>
          <BsPerson />
        </Item>
        <Item content={videoCount}>
          <BsCameraVideo />
        </Item>
      </Container>
    )
  }

  if (type === SocialType.video) {
    return (
      <Container>
        <Item content={viewCount}>
          <AiOutlineEye />
        </Item>
        <Item content={likeCount}>
          <AiOutlineLike />
        </Item>
        <Item content={commentCount}>
          <AiOutlineComment />
        </Item>
      </Container>
    )
  }

  return (
    <Container>
      <Item content={viewCount}>
        <AiOutlineEye />
      </Item>
    </Container>
  )
}
