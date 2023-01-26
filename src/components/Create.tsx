import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'

import DotProductItem from './DotProductItem'

const Create: React.FC = () => {
  const { t } = useTranslation()
  const creates = [
    {
      type: 'create',
      title: t('dotCreateData.0.title'),
      description: t('dotCreateData.0.description'),
      imgUrl: 'https://assets.zeczec.com/asset_395115_image_big.jpg?1635998912',
      buyUrl: 'https://www.zeczec.com/projects/mark-marry-ma-li',
    },
    {
      type: 'create',
      title: t('dotCreateData.1.title'),
      description: t('dotCreateData.1.description'),
      imgUrl: 'https://assets.zeczec.com/asset_530358_image_big.gif?1663689739',
      buyUrl: 'https://www.zeczec.com/projects/MarknMary2023',
    },
    {
      type: 'create',
      title: t('dotCreateData.2.title'),
      description: t('dotCreateData.2.description'),
      imgUrl:
        'https://yanshihpanda.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69908af8-27d0-4b33-a6d7-b94eea4baa28%2FUntitled.png?id=a3414dc6-4932-4348-8413-8f52b8a463ef&table=block&spaceId=70072b1e-efcc-494c-9fcb-9fff0e61e372&width=1030&userId=&cache=v2',
      buyUrl: 'https://store.line.me/stickershop/product/12515651/zh-Hant',
    },
  ]
  return (
    <>
      <Divider content='文創小物' />
      {creates.map((data) => (
        <DotProductItem data={data} key={data.title} />
      ))}
    </>
  )
}

export default Create
