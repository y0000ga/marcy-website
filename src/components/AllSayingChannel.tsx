import { youtubeGetChannelInfoApi } from '../api/youtubeApi'
import Divider from '../Layout/Divider'
import { useState, useEffect } from 'react'
import { BsPerson, BsCameraVideo, BsEye } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

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
      <Divider content={t('divider.allSayingPlace') as string} />
      <div className='lg:flex lg:justify-around'>
        {markOrangeInfo && (
          <div
            className='flex my-4 justify-center'
            onClick={() => {
              setTimeout(() => {
                window.open(
                  'https://www.youtube.com/channel/UC2EwpAwcsIAohhPgIKtrPsg',
                  '_blank'
                )
              })
            }}
          >
            <img
              src={markOrangeInfo.snippet.thumbnails.default.url}
              alt='icon'
            />
            <div className='mx-4 flex justify-center flex-col'>
              <div className='font-bold text-2xl leading-loose tracking-widest hover:text-sky-500'>
                {markOrangeInfo.snippet.title}
              </div>
              <div className='flex '>
                <div className='flex items-center mr-2'>
                  <BsPerson className='mr-2' />
                  {markOrangeInfo.statistics.subscriberCount}
                </div>
                <div className='flex items-center mr-2'>
                  <BsCameraVideo className='mr-2' />
                  {markOrangeInfo.statistics.videoCount}
                </div>
                <div className='flex items-center mr-2'>
                  <BsEye className='mr-2' />
                  {markOrangeInfo.statistics.viewCount}
                </div>
              </div>
            </div>
          </div>
        )}
        {marcyMailboxInfo && (
          <div
            className='flex my-4 justify-center'
            onClick={() => {
              setTimeout(() => {
                window.open('https://www.youtube.com/@dearmarcy', '_blank')
              })
            }}
          >
            <img
              src={marcyMailboxInfo.snippet.thumbnails.default.url}
              alt='icon'
            />
            <div className='mx-4 flex justify-center flex-col'>
              <div className='font-bold text-2xl leading-loose tracking-widest hover:text-sky-500'>
                {marcyMailboxInfo.snippet.title}
              </div>
              <div className='flex  '>
                <div className='flex items-center mr-2'>
                  <BsPerson className='mr-2' />
                  {marcyMailboxInfo.statistics.subscriberCount}
                </div>
                <div className='flex items-center mr-2'>
                  <BsCameraVideo className='mr-2' />
                  {marcyMailboxInfo.statistics.videoCount}
                </div>
                <div className='flex items-center mr-2'>
                  <BsEye className='mr-2' />
                  {marcyMailboxInfo.statistics.viewCount}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AllSayingChannel
