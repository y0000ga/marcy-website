import { youtubeGetChannelInfoApi } from '../api/youtubeApi'
import Divider from '../Layout/Divider'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { marcYoutube, marcyYoutube } from '../wordingData'

import ChannelItem from './ChannelItem'

const AllSayingChannel = () => {
  const { t } = useTranslation()
  const [markOrangeInfo, setMarkOrangeInfo] = useState() as any
  const [marcyMailboxInfo, setMarcyMailboxInfo] = useState() as any

  useEffect(() => {
    const getChannelInfo = async () => {
      const resMarcyMailbox = (await youtubeGetChannelInfoApi(
        'UCnj1nn8e_vcR3TiuQKqTGvg'
      )) as any
      setMarcyMailboxInfo(resMarcyMailbox.data.items[0])
      const resMarkOrange = (await youtubeGetChannelInfoApi(
        'UC2EwpAwcsIAohhPgIKtrPsg'
      )) as any
      setMarkOrangeInfo(resMarkOrange.data.items[0])
    }
    getChannelInfo()
  }, [])

  return (
    <>
      {markOrangeInfo &&
        marcyMailboxInfo && (
          <>
            <Divider content={t('divider.allSayingPlace') as string} />
            <div className='flex flex-col justify-around lg:flex-row w-full'>
              {markOrangeInfo && (
                <ChannelItem
                  websiteUrl={marcYoutube}
                  imgUrl={markOrangeInfo.snippet.thumbnails.default.url}
                  title={markOrangeInfo.snippet.title}
                  viewCount={markOrangeInfo.statistics.viewCount}
                  subscriberCount={markOrangeInfo.statistics.subscriberCount}
                  videoCount={markOrangeInfo.statistics.videoCount}
                />
              )}
              {marcyMailboxInfo && (
                <ChannelItem
                  websiteUrl={marcyYoutube}
                  imgUrl={marcyMailboxInfo.snippet.thumbnails.default.url}
                  title={marcyMailboxInfo.snippet.title}
                  viewCount={marcyMailboxInfo.statistics.viewCount}
                  subscriberCount={marcyMailboxInfo.statistics.subscriberCount}
                  videoCount={marcyMailboxInfo.statistics.videoCount}
                />
              )}
            </div>
          </>
        )}
    </>
  )
}

export default AllSayingChannel
