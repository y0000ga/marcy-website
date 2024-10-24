import { IWrapper } from "@/type/common.type"

export enum SocialType {
  channel,
  video,
}

export interface IProps {
  type: SocialType
  viewCount?: string
  likeCount?: string
  commentCount?: string
  subscriberCount?: string
  videoCount?: string
}

export interface IItemProps extends IWrapper {
  content?: string
}