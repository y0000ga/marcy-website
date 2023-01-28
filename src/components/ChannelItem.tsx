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
      className='flex my-4 justify-center flex-col items-center p-4 rounded-lg'
      onClick={() => {
        setTimeout(() => {
          window.open(websiteUrl, '_blank')
        })
      }}
    >
      <div className='flex justify-center items-center'>
        <span className='absolute w-24 h-24 bg-red-200 rounded-full animate-ping'></span>
        <span className='absolute w-20 h-20 bg-red-300 rounded-full animate-ping'></span>
        <img
          src={imgUrl}
          alt='icon'
          className='cursor-pointer rounded-full w-20 h-20'
        />
      </div>
      <div className='font-bold text-2xl leading-loose tracking-widest cursor-pointer hover:text-sky-500'>
        {title}
      </div>
      <SocialState
        viewCount={viewCount}
        subscriberCount={subscriberCount}
        videoCount={videoCount}
      />
    </div>
  )
}

export default ChannelItem
