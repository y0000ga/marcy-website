import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'
import tripleMarcy from '../assets/Figure/tripleMarcy.png'
import marcy2022 from '../assets/Figure/marcy2022.jpg'
import marcy2023 from '../assets/Figure/marcy2023.jpeg'
import DotProductItem from './DotProductItem'
import { dotCreateData } from '../wordingData'

const Create: React.FC = () => {
  const { t } = useTranslation()
  const creates = [
    {
      title: t('dotCreateData.0.title'),
      description: t('dotCreateData.0.description'),
      imgUrl: marcy2022,
      ...dotCreateData[0],
    },
    {
      title: t('dotCreateData.1.title'),
      description: t('dotCreateData.1.description'),
      imgUrl: marcy2023,
      ...dotCreateData[1],
    },
    {
      title: t('dotCreateData.2.title'),
      description: t('dotCreateData.2.description'),
      imgUrl: tripleMarcy,
      ...dotCreateData[2],
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
