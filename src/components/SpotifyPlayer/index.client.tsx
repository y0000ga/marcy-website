'use client'

import { useEffect } from 'react'
import { IProps, IIFrameAPI, IEmbedController } from './index.type'

const SPOTIFY_EMBED_ID = 'embed-marcy-spotify-iframe'

export const SpotifyPlayer = ({ uri, optionUris }: IProps) => {
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI: IIFrameAPI) => {
      const element = document.getElementById(`${SPOTIFY_EMBED_ID}-${uri}`)
      const options = {
        width: '100%',
        height: '160',
        uri,
      }

      const callback = (EmbedController: IEmbedController) => {
        const episodeElements = document.querySelectorAll('.episode')
        episodeElements.forEach((element) => {
          element.addEventListener('click', () => {
            const spotifyId = (element as HTMLElement).dataset
              .spotifyId as string
            EmbedController.loadUri(spotifyId)
          })
        })
      }
      IFrameAPI.createController(element, options, callback)
    }
  }, [uri])

  return (
    <>
      <div>
        {optionUris.map((uri) => (
          <button
            key={uri}
            className='episode border border-sky-500 m-4 h-10 w-fit px-4 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'
            data-spotify-id={uri}
          >
            或許你需要觀點
          </button>
        ))}
      </div>
      <div id={`${SPOTIFY_EMBED_ID}-${uri}`} />
    </>
  )
}
