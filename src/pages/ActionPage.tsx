import MainWrapper from '../Layout/MainWrapper'
import {
  memorialData,
  recommendData,
  dotCreateData,
  dotBookData,
} from '../wordingData'
import YoutubeDisplayBox from '../components/YoutubeDisplayBox'
import Divider from '../Layout/Divider'
import DotProductItem from '../components/DotProductItem'
import { useTranslation } from 'react-i18next'

const ActionPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.action.0')}
      </div>
      <Divider content={t('divider.memoryCeremony') as string} />
      {memorialData.map((data) => (
        <YoutubeDisplayBox
          key={data.id}
          id={data.id}
          description={data.description}
          title={data.title}
        />
      ))}
      <Divider content={t('divider.firstSong') as string} />
      <YoutubeDisplayBox
        key={t('marySongData.id')}
        id={t('marySongData.id')}
        title={t('marySongData.title')}
        description={t('marySongData.description')}
      />
      <Divider content='青春巨著' />
      <div className='flex flex-col justify-center'>
        {dotBookData.map((data) => (
          <DotProductItem data={data} key={data.title} />
        ))}
      </div>
      <Divider content='入教首推' />
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
      <Divider content='文創小物' />
      {dotCreateData.map((data) => (
        <DotProductItem data={data} key={data.title} />
      ))}
    </MainWrapper>
  )
}

export default ActionPage
