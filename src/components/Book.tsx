import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'
import DotProductItem from './DotProductItem'
import { dotBookData } from '../wordingData'

const Book: React.FC = () => {
  const { t } = useTranslation()
  const books = [
    {
      title: t('dotBookData.0.title'),
      creator: t('dotBookData.0.creator'),
      description: t('dotBookData.0.description'),
      ...dotBookData[0],
    },
    {
      title: t('dotBookData.1.title'),
      creator: t('dotBookData.1.creator'),
      description: t('dotBookData.1.description'),
      ...dotBookData[1],
    },
  ]
  return (
    <>
      <Divider content={t('divider.book') as string} />
      <div className='flex flex-col justify-center'>
        {books.map((data) => (
          <DotProductItem data={data} key={data.title} />
        ))}
      </div>
    </>
  )
}

export default Book
