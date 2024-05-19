interface IYtDefault {
  kind: string
  etag: string
}

interface IThumbnails {
  thumbnails: {
    [key: string]: IThumbnail
  }
}

interface IPageInfo {
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

interface IPageToken {
  nextPageToken?: string // 有的話代表可以往下一頁
  prevPageToken?: string // 有的話代表可以往上一下
}

interface ITopLevelCommentSnippet {
  channelId: string
  videoId: string
  textDisplay: string
  textOriginal: string
  authorDisplayName: string
  authorProfileImageUrl: string
  authorChannelUrl: string
  authorChannelId: {
    value: string
  }
  canRate: boolean
  viewerRating: string
  likeCount: number
  publishedAt: Date
  updatedAt: Date
}

interface ITopLevelComment extends IYtDefault {
  id: string
  snippet: ITopLevelCommentSnippet
}

interface ICommentThreadItemSnippet {
  channelId: string
  videoId: string
  topLevelComment: ITopLevelComment
  canReply: boolean
  totalReplyCount: number
  isPublic: boolean
}

interface ICommentThreadItem extends IYtDefault {
  id: string
  snippet: ICommentThreadItemSnippet
}

interface IThumbnail {
  url: string
  width: number
  height: number
}

interface ILocalized {
  title: string
  description: string
}

interface IVideoItemSnippet extends ILocalized, IThumbnails {
  publishedAt: string
  channelId: string
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  defaultLanguage: string
  localized: ILocalized
  defaultAudioLanguage: string
}

interface IChannelStatistics {
  viewCount: string
  subscriberCount: string
  hiddenSubscriberCount: boolean
  videoCount: string
}

interface IChannelSnippet extends ILocalized, IThumbnails {
  customUrl: string
  publishedAt: string

  defaultLanguage: string
  localized: ILocalized
  country: string
}

interface IChannelItem extends IYtDefault {
  id: string
  snippet: IChannelSnippet
  statistics: IChannelStatistics
}

export interface IVideoStatistics {
  viewCount: string
  likeCount: string
  favoriteCount: string
  commentCount: string
}

export interface IVideoItem extends IYtDefault {
  id: string
  snippet: IVideoItemSnippet
  statistics: IVideoStatistics
}

export interface ICommentThreadRes extends IPageInfo, IYtDefault, IPageToken {
  items: ICommentThreadItem[]
}

export interface IVideoRes extends IPageInfo, IYtDefault {
  items: IVideoItem[]
}

export interface IChannelRes extends IYtDefault, IPageInfo {
  items: IChannelItem[]
}

export enum YoutubePart {
  snippet = 'snippet',
  statistics = 'statistics',
  contentDetails = 'contentDetails',
}

export interface IPlaylistItemItemSnippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: IThumbnails
  channelTitle: string
  videoOwnerChannelTitle: string
  videoOwnerChannelId: string
  playlistId: string
  position: number
  resourceId: {
    kind: string
    videoId: string
  }
}

export interface IPlaylistItemItem extends IYtDefault {
  id: string
  contentDetails: {
    videoId: string
    videoPublishedAt: string
  }
}

export interface IPlaylistItemReq extends IPageInfo, IPageToken {
  kind: string
  etag: string
  items: IPlaylistItemItem[]
}
