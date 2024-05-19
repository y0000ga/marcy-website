interface IImage {
  height: number
  url: string
  width: number
}

interface IShowItem {
  audio_preview_url: string
  description: string
  duration_ms: number
  explicit: boolean
  external_urls: {
    spotify: string
  }
  href: string
  html_description: string
  id: string
  images: IImage[]
  is_externally_hosted: boolean
  is_playable: boolean
  language: string
  languages: string[]
  name: string
  release_date: string
  release_date_precision: string
  resume_point: {
    fully_played: boolean
    resume_position_ms: number
  }
  type: string
  uri: string
}

export interface IShow {
  available_markets: string[]
  copyrights: string[]
  description: string
  episodes: {
    href: string
    items: IShowItem[]
    limit: number
    next: string
    offset: number
    previous: string | null
    total: number
  }
  explicit: boolean
  external_urls: {
    spotify: string
  }
  href: string
  html_description: string
  id: string
  images: IImage[]
  is_externally_hosted: boolean
  languages: string[]
  media_type: string
  name: string
  publisher: string
  total_episodes: number
  type: string
  uri: string
}
