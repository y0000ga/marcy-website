import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'
import tripleMarcy from '../assets/Figure/tripleMarcy.png'
import marcy2022 from '../assets/Figure/marcy2022.jpg'
import marcy2023 from '../assets/Figure/marcy2023.jpeg'

import DotProductItem from './DotProductItem'

const Create: React.FC = () => {
  const { t } = useTranslation()
  const creates = [
    {
      type: 'create',
      title: t('dotCreateData.0.title'),
      description: t('dotCreateData.0.description'),
      imgUrl: marcy2022,
      buyUrl: 'https://www.zeczec.com/projects/mark-marry-ma-li',
    },
    {
      type: 'create',
      title: t('dotCreateData.1.title'),
      description: t('dotCreateData.1.description'),
      imgUrl: marcy2023,
      buyUrl: 'https://www.zeczec.com/projects/MarknMary2023',
    },
    {
      type: 'create',
      title: t('dotCreateData.2.title'),
      description: t('dotCreateData.2.description'),
      imgUrl: tripleMarcy,
      buyUrl: 'https://store.line.me/stickershop/product/12515651/zh-Hant',
    },
  ]
  return (
    <>
      <Divider content={t('divider.create') as string} />
      {creates.map((data) => (
        <DotProductItem data={data} key={data.title} />
      ))}
    </>
  )
}

export default Create
