interface ListeningGuideItemProps {
  title: string
  imgUrl: string
  description: string
  videoUrl: string
  button: string
}

const ListeningGuideItem: React.FC<ListeningGuideItemProps> = ({
  title,
  imgUrl,
  description,
  videoUrl,
  button,
}) => {
  return (
    <li
      className='flex flex-col md:w-96 m-8 border rounded-md shadow-md overflow-hidden bg-sky-500'
    >
      <div className='flex justify-center p-4 shadow-md bg-white'>
        <img src={imgUrl} alt='icon' />
      </div>
      <div className='border-t p-4  text-justify text-white'>
        <span className='font-semibold'>{title}</span>
        <br />
        {description}
        <br />
        <button
          className='border border-white mt-4  left-1/2 text-white -translate-x-1/2 p-4 rounded-md tracking-widest font-light hover:bg-yellow-400 hover:border-yellow-400 hover:text-black hover:font-normal '
          onClick={() => {
            setTimeout(() => {
              window.open(videoUrl, '_blank')
            })
          }}
        >
          {button}
        </button>
      </div>
    </li>
  )
}

export default ListeningGuideItem
