import { ISlide } from '@/components/Carousel/index.client'
import { SocialType } from '@/components/SocialState/index.type'
import { iconTestid } from '@/__mock__/testid'

/**
 * @description 測試假資料
 */
export const mockSlides: ISlide[] = [
  {
    title: 'Slide 1',
    imgSrc: '/images/slide1.jpg',
    externalUrl: 'https://example.com/1',
  },
  {
    title: 'Slide 2',
    imgSrc: '/images/slide2.jpg',
    externalUrl: 'https://example.com/2',
  },
  { title: 'Slide 3', imgSrc: '/images/slide3.jpg' },
]

export const mockSocialStates = [
  {
    type: SocialType.channel,
    expectedData: {
      viewCount: '1000',
      subscriberCount: '700',
      videoCount: '9',
    },
    expectedIcons: [
      iconTestid.AiOutlineEye,
      iconTestid.BsPerson,
      iconTestid.BsCameraVideo,
    ],
  },
  {
    type: SocialType.video,
    expectedData: {
      viewCount: '120',
      likeCount: '200',
      commentCount: '30',
    },
    expectedIcons: [
      iconTestid.AiOutlineEye,
      iconTestid.AiOutlineLike,
      iconTestid.AiOutlineComment,
    ],
  },
]

export const mockChannel = {
  id: '1',
  imgSrc: '/images/channel.jpg',
  title: 'Channel Title',
  statistics: {
    viewCount: '1000',
    subscriberCount: '700',
    videoCount: '9',
  },
}
