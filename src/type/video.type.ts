import { IVideoStatistics } from './api/youtube.type'

export interface IVideo {
  statistics: IVideoStatistics
  title: string
  description: string
}

export interface IComment {
  comments: { id: string; textDisplay: string; author: string }[]
}

export interface IChannel {
  id:string,
  statistics: {
    viewCount: string
    subscriberCount: string
    videoCount: string
  }
  imgSrc: string
  title: string
}
