import Image from 'next/image'
import { IGuide, IProps } from './index.type'

const ListeningGuideItem = ({
  title,
  imgUrl,
  description,
  videoUrl,
  button,
}: IGuide) => {
  return (
    <li className='flex flex-col md:w-96 m-8 border rounded-md shadow-md overflow-hidden bg-sky-500'>
      <div className='flex justify-center w-full p-16 shadow-md bg-white'>
        <Image width={200} height={200} src={imgUrl} alt='icon' />
      </div>
      <div className='border-t p-4 relative text-justify text-white flex flex-col gap-4'>
        <h6 className='font-semibold'>{title}</h6>
        <p>{description}</p>
        <a
          className='border border-white  text-center text-white  p-2 rounded-md tracking-widest  hover:bg-yellow-400 hover:border-yellow-400 hover:text-black hover:font-normal '
          href={videoUrl}
          target='_blank'
        >
          {button}
        </a>
      </div>
    </li>
  )
}

export const Guide = ({ guides }: IProps) => (
  <ul className='leading-loose mt-4 text-justify  flex flex-wrap justify-center'>
    {guides.map(({ title, imgUrl, description, videoUrl, button }) => (
      <ListeningGuideItem
        key={title}
        title={title}
        imgUrl={imgUrl}
        description={description}
        videoUrl={videoUrl}
        button={button}
      />
    ))}
  </ul>
)
