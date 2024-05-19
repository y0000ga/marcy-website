import { Channel } from '@/components/Channel'
import { RandomSaying } from '@/components/RandomSaying/index.client'
import { Saying } from '@/components/Saying'
import { SayingType } from '@/components/Saying/index.type'
import { TypingHeader } from '@/components/Typing'
import { channelIds } from '@/helper/constant'
import initTranslations from '@/i18n'
import { IPage } from '@/type/common.type'
import { range } from 'lodash'

const Page = async ({ params }: IPage) => {
  const { locale } = params
  const { t } = await initTranslations(locale)

  const sayings = range(23).map((num) => ({
    title: t(`dotSayingData.${num}.title`),
    text: t(`dotSayingData.${num}.description`),
  }))

  return (
    <>
      <div className='leading-loose mt-4 text-justify relative'>
        {t('pageOpeningData.saying.0')}
      </div>
      <TypingHeader content={t('divider.allSayingPlace')} />
      {channelIds.map((id) => (
        <Channel id={id} key={id} />
      ))}
      <TypingHeader content={t('divider.allSaying')} />
      <div className='leading-loose my-4 text-justify relative'>
        <p>{t('sayingGet.opening')}</p>
        <RandomSaying name={t('sayingGet.buttonContent')} sayings={sayings} />
        {sayings.map(({ text, title }) => (
          <Saying
            key={title}
            title={title}
            text={text}
            type={SayingType.speak}
          />
        ))}
      </div>
    </>
  )
}

export default Page
