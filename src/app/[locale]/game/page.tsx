import initTranslations from '@/i18n'
import { IPage } from '@/type/common.type'
import { BsDot, BsCircle } from 'react-icons/bs'
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import gameIcon from '/public/assets/Figure/gameIcon.png'
import Image from 'next/image'
import { PsyGame } from '@/components/PsyGame/index.client'
import { TypingHeader } from '@/components/Typing'

const Page = async ({ params }: IPage) => {
  const { locale } = params
  const { t } = await initTranslations(locale)
  const objects = [
    <BsDot key='1' />,
    <BsCircle key='2' />,
    <TfiLayoutLineSolid key='3' className='origin-center -rotate-45' />,
    <TfiLayoutLineSolid key='4' className=' origin-center rotate-45' />,
    <TfiLayoutLineSolid key='5' />,
    <TfiLayoutLineSolid key='6' className=' origin-center rotate-90' />,
  ]
  return (
    <>
      <Image
        src={gameIcon}
        width={200}
        height={200}
        alt='game'
        className='m-auto'
      />
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.game.0')}
      </div>
      <TypingHeader content={t('divider.phyTestTitle')} />
      <div className='flex flex-wrap justify-around'>
        {objects.map((object, index) => (
          <PsyGame
            indexPrefix={`${t('psyTest.no')}${index + 1}${t(
              'psyTest.question'
            )}`}
            translation={{
              adj1: t('psyTest.firstAdj'),
              adj2: t('psyTest.secondAdj'),
              clear: t('psyTest.clearCanvas'),
              check: t('psyTest.checkAnswer'),
            }}
            key={t(`phyTestTopic.${index}`)}
            topic={t(`phyTestTopic.${index}`)}
          >
            {object}
          </PsyGame>
        ))}
      </div>
    </>
  )
}

export default Page
