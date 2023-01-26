import Divider from '../Layout/Divider'
import YoutubeDisplayBox from './YoutubeDisplayBox'
import { useTranslation } from 'react-i18next'

const Memory: React.FC = () => {
  const { t } = useTranslation()
  const memorialData = [
    {
      title: t('memorialData.0.title'),
      id: 'wtwXp8UzN3c',
      description: t('memorialData.0.description'),
    },
    {
      title: t('memorialData.1.title'),
      id: 'v_TrL0tQ0jg',
      description: t('memorialData.1.description'),
    },
    {
      title: t('memorialData.2.title'),
      id: 'pBGETSZhl7E',
      description: t('memorialData.2.description'),
    },
    {
      title: t('memorialData.3.title'),
      id: 'vIACeOCcy3w',
      description: t('memorialData.3.description'),
    },
    {
      title: t('memorialData.4.title'),
      id: 'MN4bC-zHwVQ',
      description: t('memorialData.4.description'),
    },
    {
      title: t('memorialData.5.title'),
      id: 'V8lA8RHacI4',
      description: t('memorialData.5.description'),
    },
  ]
  return (
    <>
      <Divider content={t('divider.memoryCeremony') as string} />
      {memorialData.map((data) => (
        <YoutubeDisplayBox
          key={data.id}
          id={data.id}
          description={data.description}
          title={data.title}
        />
      ))}
    </>
  )
}

export default Memory
