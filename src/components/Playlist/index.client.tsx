'use client'

import { IPlaylistItemReq } from '@/type/api/youtube.type'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Loading } from '../Loading'
import { MARCY_PLAYLIST_ID, YOUTUBE_EMBED_URL } from '@/helper/constant'
import { throttleListener } from '@/util/throttleListener'

interface IProps {
  initialPlaylistItemData: IPlaylistItemReq
}

export const Playlist = ({ initialPlaylistItemData }: IProps) => {
  const [playlistItemData, setPlaylistItemData] = useState<IPlaylistItemReq>(
    initialPlaylistItemData
  )

  const scrollTrigger = useRef<HTMLDivElement | null>(null)

  const loadMoreData = async (pageToken?: string) => {
    if (!!pageToken) {
      const { data: newPlaylistItemData } = await axios.request({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_MARCY_API_URL}/playlistItem`,
        params: {
          playlistId: MARCY_PLAYLIST_ID,
          pageToken,
        },
      })
      const finalData = newPlaylistItemData.data as IPlaylistItemReq

      if (!!finalData) {
        setPlaylistItemData((prev) => ({
          ...finalData,
          items: [...prev.items, ...finalData.items],
        }))
      }
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return
    }

    const throttledLoadMoreData = throttleListener(
      (
        entries: IntersectionObserverEntry[],
        _observer: IntersectionObserver
      ) => {
        if (entries[0].isIntersecting) {
          loadMoreData(playlistItemData.nextPageToken)
        }
      },
      200
    )

    const observer = new IntersectionObserver(throttledLoadMoreData, {
      threshold: 0.5,
    })

    const currentScrollTrigger = scrollTrigger.current

    if (currentScrollTrigger) {
      observer.observe(currentScrollTrigger)
    }

    return () => {
      if (currentScrollTrigger) {
        observer.unobserve(currentScrollTrigger)
      }
    }
  }, [playlistItemData.nextPageToken])
  return (
    <>
      <section className='w-full flex flex-wrap justify-between gap-y-4'>
        {playlistItemData.items.map(({ contentDetails }) => (
          <iframe
            key={contentDetails.videoId}
            className='top-0 left-0 w-full h-full lg:w-96'
            src={`${YOUTUBE_EMBED_URL}/${contentDetails.videoId}`}
            title={contentDetails.videoId}
            allowFullScreen={true}
          />
        ))}
      </section>
      <div className='text-center text-slate-600 mt-5'>
        {!!playlistItemData.nextPageToken && (
          <div ref={scrollTrigger} className='flex justify-center'>
            <Loading />
          </div>
        )}
      </div>
    </>
  )
}
