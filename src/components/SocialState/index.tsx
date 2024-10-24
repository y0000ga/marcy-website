import React from 'react'
import { AiOutlineEye, AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { BsPerson, BsCameraVideo } from 'react-icons/bs'
import { IItemProps, IProps, SocialType } from './index.type'
import { IWrapper } from '@/type/common.type'
import { iconTestid } from '@/__mock__/testid'

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
}: IProps) => (
  <Container>
    <Item content={viewCount}>
      <AiOutlineEye data-testid={iconTestid.AiOutlineEye} />
    </Item>
    {type === SocialType.channel && (
      <>
        <Item content={subscriberCount}>
          <BsPerson data-testid={iconTestid.BsPerson} />
        </Item>
        <Item content={videoCount}>
          <BsCameraVideo data-testid={iconTestid.BsCameraVideo} />
        </Item>
      </>
    )}
    {type === SocialType.video && (
      <>
        <Item content={likeCount}>
          <AiOutlineLike data-testid={iconTestid.AiOutlineLike} />
        </Item>
        <Item content={commentCount}>
          <AiOutlineComment data-testid={iconTestid.AiOutlineComment} />
        </Item>
      </>
    )}
  </Container>
)
