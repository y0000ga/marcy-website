import Divider from '../Layout/Divider'
import { useTranslation } from 'react-i18next'
import ListeningGuideIcon01 from '../assets/ListeningGuideIcon/ListeningGuideIcon (1).png'
import ListeningGuideIcon02 from '../assets/ListeningGuideIcon/ListeningGuideIcon (2).png'
import ListeningGuideIcon03 from '../assets/ListeningGuideIcon/ListeningGuideIcon (3).png'
import ListeningGuideIcon04 from '../assets/ListeningGuideIcon/ListeningGuideIcon (4).png'

const ListeningGuide = () => {
  const { t } = useTranslation()
  const listeningGuide = [
    {
      title: t('listeningGuideData.0.title'),
      description: t('listeningGuideData.0.description'),
      imgUrl: ListeningGuideIcon01,
      button: t('listeningGuideData.0.button'),
      videoUrl: 'https://youtu.be/cGXcxClM1FE?t=888',
    },
    {
      title: t('listeningGuideData.1.title'),
      description: t('listeningGuideData.1.description'),
      imgUrl: ListeningGuideIcon04,
      button: t('listeningGuideData.1.button'),
      videoUrl: 'https://www.youtube.com/watch?v=-qnwkwVZOQ8',
    },
    {
      title: t('listeningGuideData.2.title'),
      description: t('listeningGuideData.2.description'),
      imgUrl: ListeningGuideIcon02,
      button: t('listeningGuideData.2.button'),
      videoUrl: 'https://youtu.be/h_ED1q-q33U',
    },
    {
      title: t('listeningGuideData.3.title'),
      description: t('listeningGuideData.3.description'),
      imgUrl: ListeningGuideIcon03,
      button: t('listeningGuideData.3.button'),
      videoUrl: 'https://youtu.be/KGXbpBEnR_k?t=457',
    },
  ]
  return (
    <>
      <Divider content={t('divider.listeningGuide') as string} />
      <div className='leading-loose mt-4 text-justify flex flex-col'>
        <ul className='flex flex-wrap justify-center'>
          {listeningGuide.map((data) => (
            <li
              key={data.title}
              className='flex flex-col md:w-96 m-8 border rounded-md shadow-md overflow-hidden bg-sky-500'
            >
              <div className='flex justify-center p-4 shadow-md bg-white'>
                <img src={data.imgUrl} alt='icon' className='' />
              </div>
              <div className='border-t p-4  text-justify text-white'>
                <span className='font-semibold'>{data.title}</span>
                <br />
                {data.description}
                <br />
                <button
                  className='border border-white mt-4 w-full left-1/2 text-white -translate-x-1/2 p-4 rounded-md tracking-widest font-light hover:bg-yellow-400 hover:border-yellow-400 hover:text-black hover:font-normal'
                  onClick={() => {
                    setTimeout(() => {
                      window.open(data.videoUrl, '_blank')
                    })
                  }}
                >
                  {data.button}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div
          className='border border-slate-300 w-fit py-1 px-2 rounded-md m-4 cursor-pointer left-1/2 -translate-x-1/2 hover:bg-red-500 hover:text-white'
          onClick={() => {
            setTimeout(() => {
              window.open(
                'https://www.youtube.com/watch?v=qOUEXAAFxWY&list=PLuGVMNMvIB_GW6pwd0Tj6rjoEvZxn6UuE',
                '_blank'
              )
            })
          }}
        >
          {t('listeningGuide.crazy')}
          <span className='flex h-3 w-3 absolute -top-1 -right-1'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-3 w-3 bg-yellow-500'></span>
          </span>
        </div>
      </div>
    </>
  )
}

export default ListeningGuide
