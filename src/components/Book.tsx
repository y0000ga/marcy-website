import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'
import DotProductItem from './DotProductItem'

const Book: React.FC = () => {
  const { t } = useTranslation()
  const books = [
    {
      title: t('dotBookData.0.title'),
      creator: t('dotBookData.0.creator'),
      description: t('dotBookData.0.description'),
      type: 'book',
      date: '2015/08/10',
      imgUrl: 'https://cf.shopee.tw/file/f43d8018674932c86378140f04932014',
      buyUrl: 'https://www.books.com.tw/products/0010685025?sloc=main',
    },
    {
      title: t('dotBookData.1.title'),
      creator: t('dotBookData.1.creator'),
      description: t('dotBookData.1.description'),
      type: 'book',
      date: '2022/09/30',
      imgUrl: 'https://cf.shopee.tw/file/3fdffaafe2fc7218900d92b20697234b',
      buyUrl:
        'https://www.books.com.tw/products/0010935968?utm_source=www&utm_medium=share&utm_content=copy&utm_campaign=product&utm_term=0010935968',
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
