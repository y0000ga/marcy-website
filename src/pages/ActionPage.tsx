import MainWrapper from '../Layout/MainWrapper'
import { memorialData, recommendData, marySongData, dotCreateData } from '../wordingData'
import YoutubeDisplayBox from '../components/YoutubeDisplayBox'
import Divider from '../Layout/Divider'
import { dotBookData } from '../wordingData'
import DotProductItem from '../components/DotProductItem'
import { pageOpeningData } from '../wordingData'

const ActionPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {pageOpeningData.action[0]}
      </div>
      <Divider content='逝世追思紀念會' />
      {memorialData.map((data) => (
        <YoutubeDisplayBox
          key={data.id}
          id={data.id}
          description={data.description}
          title={data.title}
        />
      ))}
      <Divider content='廣女的第一首歌' />
      <YoutubeDisplayBox
        key={marySongData.id}
        id={marySongData.id}
        title={marySongData.title}
        description={marySongData.description}
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
