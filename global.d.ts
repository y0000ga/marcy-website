declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: SpotifyIFrameAPI) => void
  }
  namespace NodeJS {
    interface ProcessEnv {
      I18NEXUS_API_KEY: string
      OPEN_WEATHER_API_KEY: string
      GOOGLE_API_KEY: string
      CLARITY_KEY: string
      MARCY_API_URL:string
    }
  }
}

export {}
