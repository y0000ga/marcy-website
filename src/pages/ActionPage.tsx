import MainWrapper from '../Layout/MainWrapper'
import { memorialData, recommendData, marySongData, dotCreateData } from '../wordingData'
import YoutubeDisplayBox from '../components/YoutubeDisplayBox'
import Divider from '../Layout/Divider'
import { dotBookData } from '../wordingData'
import DotProductItem from '../components/DotProductItem'

const ActionPage: React.FC = () => {
  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        在青春點點點結束後，教主馬克語教母瑪麗仍然努力將青點教的教義發揚光大，期望能夠讓青點宇宙逐漸擴大，給大家智慧的光輝。以下紀錄教主教母在弘揚青點教過程中的點點滴滴。
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
