import { Product } from '@/components/Product'
import { SpotifyPlayer } from '@/components/SpotifyPlayer/index.client'
import { TypingHeader } from '@/components/Typing'
import { YoutubeFrame } from '@/components/YoutubeFrame'
import { SPOTIFY_URIS, books, creations, memoryIds } from '@/helper/constant'
import initTranslations from '@/i18n'
import { IPage, ProductType } from '@/type/common.type'

const Page = async ({ params }: IPage) => {
  const { locale } = params
  const { t } = await initTranslations(locale)

  return (
    <>
      <TypingHeader content={t('divider.memoryCeremony')} />
      {memoryIds.map((id) => (
        <YoutubeFrame key={id} id={id} />
      ))}
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.action.0')}
      </div>
      <TypingHeader content={t('divider.firstSong')} />
      <YoutubeFrame id='P7eWIidHWvI' />
      <TypingHeader content={t('superstar')} />
      <YoutubeFrame id='TM_BUvazr_Y' />
      <TypingHeader content={t('divider.book') as string} />
      {books.map(({ imgSrc, buyUrl, date }, index) => (
        <Product
          key={buyUrl}
          locale={locale}
          title={t(`dotBookData.${index}.title`)}
          description={t(`dotBookData.${index}.description`)}
          imgSrc={imgSrc}
          buyUrl={buyUrl}
          date={date}
          type={ProductType.book}
        />
      ))}
      <TypingHeader content={t('divider.create')} />
      {creations.map(({ imgSrc, buyUrl }, index) => (
        <Product
          key={buyUrl}
          locale={locale}
          title={t(`dotCreateData.${index}.title`)}
          description={t(`dotCreateData.${index}.description`)}
          imgSrc={imgSrc}
          buyUrl={buyUrl}
          type={ProductType.book}
        />
      ))}
      <TypingHeader content={'回顧兩年前的時光機'} />
      <SpotifyPlayer
        uri='spotify:show:3LqrgH91QEY8dD49cpjxJU'
        optionUris={SPOTIFY_URIS}
      />
    </>
  )
}
export default Page
