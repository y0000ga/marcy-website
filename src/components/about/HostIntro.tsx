import Image from 'next/image'

interface IProps {
  name: string
  imgSrc: string
  description: string
  contents: string[]
}

export const HostIntro = ({ name, imgSrc, description, contents }: IProps) => (
  <div className='leading-loose mt-4 text-justify'>
    <div className='text-xl text-neutral-600 font-bold flex flex-row justify-center items-center my-4 md:text-5xl'>
      {name}
    </div>
    <div className='list-inside list-decimal lg:flex lg:items-center'>
      <div className='flex flex-col items-center'>
        <Image
          width={500}
          height={500}
          src={imgSrc}
          alt={name}
          className='w-full border h-full p-2 my-2 md:w-96'
        />
        <div className='text-center text-neutral-400 mb-4'>{description}</div>
      </div>
      <ul className='list-disc list-inside lg:ml-4'>
        {contents.map((content) => (
          <li key={content}>{content}</li>
        ))}
      </ul>
    </div>
  </div>
)
