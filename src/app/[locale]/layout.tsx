import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'
import Header from '@/components/layout/Header'
import { ILayout } from '@/type/common.type'
import initTranslations from '@/i18n'
import Image from 'next/image'
import donationLogo from '/public/assets/Logo/donationLogo.svg'
import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'
import Script from 'next/script'
import { SecretDialog } from '@/components/SecretDialog/index.client'
import { SPOTIFY_SCRIPT_SRC } from '@/helper/constant'
import { ScrollUpButton } from '@/components/layout/SrcollUpButton/index.client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: { icon: './icon.svg' },
  title: '上班可以聽 LWW',
  description:
    '由青春點點點廣播主持人歐馬克與瑪麗的象牙塔所主持的解憂雜貨店，數位收藏真實人生的喜怒哀樂。不只上班可以聽，通勤、煮飯、化妝、畫圖、打掃整理，所有不用太燒腦的時間都可以聽',
  keywords: [
    '上班可以聽',
    '歐馬克',
    '瑪麗',
    '活在當下',
    '面對自己的好朋友',
    '人生啟發',
    '瞎七拉八的閒聊',
  ],
}

const RootLayout = async ({ params, children }: Readonly<ILayout>) => {
  const { locale } = params
  const { t } = await initTranslations(locale)

  const options = [
    t('secret.relationship'),
    t('secret.friendship'),
    t('secret.career'),
    t('secret.other'),
  ]

  const secretTranslation = {
    submit: t('secret.submit'),
    feel: t('secret.feel'),
    someones: t('secret.someones'),
    yours: t('secret.yours'),
    disappear: t('secret.disappear'),
    nickname: t('secret.nickname'),
    keyInBadMood: t('keyInBadMood'),
    mood: t('secret.mood'),
    type: t('secret.type'),
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} w-full h-full flex flex-col items-center scroll-smooth`}
        style={{ minWidth: '320px' }}
      >
        <Script src={SPOTIFY_SCRIPT_SRC} async></Script>
        <Header locale={locale} />
        <main className='w-full'>{children}</main>
        <Link
          className='bg-white w-24 h-24 fixed bottom-10 left-10 cursor-pointer animate-bounce z-10 rounded-full overflow-hidden'
          href={`/${locale}/donation`}
        >
          <Image
            layout='fill'
            src={donationLogo}
            alt='donation'
            className='w-24 border'
          />
        </Link>
        <div className='fixed right-10 bottom-10 flex flex-col items-center gap-4'>
          <ScrollUpButton />
          <SecretDialog translation={secretTranslation} options={options} />
        </div>
        <Footer>
          <>
            {t('footer.0')}
            <br />
            {t('footer.1')}
          </>
        </Footer>
      </body>
    </html>
  )
}

export default RootLayout
