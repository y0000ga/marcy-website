import Divider from '../Layout/Divider'
import { useTranslation } from 'react-i18next'
import pictureFromOthers from '../assets/Figure/pictureFromOthers.png'
const Method: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Divider content={t('divider.method') as string} />
      <div className='flex flex-col lg:flex-row'>
        <div className='flex justify-center items-center'>
          <img
            src={pictureFromOthers}
            alt='pictureFromOthers'
            className='border w-full my-4 md:w-96'
          />
        </div>
        <div className=' lg:ml-4'>
          <div className='leading-loose tracking-widest my-4'>
            <div className='text-lg text-sky-500 my-4'>
              {t('method.letter.title')}
            </div>
            <div className='my-2'>📪 請寄到{t('method.letter.address')}</div>
            <ul>
              <li>
                👋<span className='ml-2'>{t('method.letter.warning.0')}</span>
              </li>
              <li>
                👋<span className='ml-2'>{t('method.letter.warning.1')}</span>
              </li>
              <li>
                👋<span className='ml-2'>{t('method.letter.warning.2')}</span>
              </li>
            </ul>
          </div>
          <div className='leading-loose tracking-widest my-4'>
            <div className='text-lg text-sky-500 my-4'>
              {t('method.picture.title')}
            </div>
            <div className='my-2'>📪 請寄到{t('method.picture.address')}</div>
            <ul>
              <li>
                👋<span className='ml-2'>{t('method.picture.warning.0')}</span>
              </li>
              <li>
                👋<span className='ml-2'>{t('method.picture.warning.1')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Method
