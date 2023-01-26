import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'
import YoutubeDisplayBox from './YoutubeDisplayBox'

const Recommend: React.FC = () => {
  const { t } = useTranslation()
  const recommendData = [
    {
      title: t('recommendData.0.title'),
      id: '3UKShkBr8zg',
      description: t('recommendData.0.description'),
      start: '1676',
      quote: [t('recommendData.0.quote.0'), t('recommendData.0.quote.1')],
      comment: t('recommendData.0.comment'),
    },
    {
      title: t('recommendData.1.title'),
      description: t('recommendData.1.description'),
      quote: [t('recommendData.1.quote.0'), t('recommendData.1.quote.1')],
      comment: t('recommendData.1.comment'),
      id: '501872k71bc',
      start: '1378',
    },
    {
      title: t('recommendData.2.title'),
      description: t('recommendData.2.description'),
      quote: [t('recommendData.2.quote.0'), t('recommendData.2.quote.1')],
      comment: t('recommendData.2.comment'),
      id: 'MZuyL1MgwfY',
    },
    {
      title: t('recommendData.3.title'),
      description: t('recommendData.3.description'),
      quote: [t('recommendData.4.quote.0'), t('recommendData.4.quote.1')],
      comment: t('recommendData.4.comment'),
      id: 'NbloabYCKFA',
      start: '376',
    },
  ]
  return (
    <>
      <Divider content={t('divider.recommend') as string} />
      {recommendData.map((data) => (
        <YoutubeDisplayBox
          key={data.id}
          id={data.id}
          description={data.description}
          title={data.title}
          start={data.start}
          quote={data.quote}
          comment={data.comment}
        />
      ))}
    </>
  )
}

export default Recommend
