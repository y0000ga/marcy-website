import SocialState from './SocialState'

interface ChannelItemProps {
  websiteUrl: string
  imgUrl: string
  title: string
  viewCount: string
  subscriberCount: string
  videoCount: string
}

const ChannelItem: React.FC<ChannelItemProps> = ({
  websiteUrl,
  imgUrl,
  title,
  viewCount,
  subscriberCount,
  videoCount,
}) => {
  return (
    <div
      className='flex my-4 justify-center pr-4 '
      onClick={() => {
        setTimeout(() => {
          window.open(websiteUrl, '_blank')
        })
      }}
    >
      <img src={imgUrl} alt='icon' className='cursor-pointer rounded-full' />
      <div className='mx-4 flex justify-center flex-col'>
        <div className='font-bold text-2xl leading-loose tracking-widest cursor-pointer hover:text-sky-500 mx-2'>
          {title}
        </div>
        <SocialState
          viewCount={viewCount}
          subscriberCount={subscriberCount}
          videoCount={videoCount}
        />
      </div>
    </div>
  )
}

export default ChannelItem
