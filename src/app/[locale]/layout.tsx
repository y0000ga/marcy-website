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
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

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
    <html lang={locale} className='overflow-x-hidden max-w-screen'>
      <Script src={SPOTIFY_SCRIPT_SRC} async></Script>
      <body
        className={`${inter.className} max-w-screen  flex flex-col items-center scroll-smooth min-w-[320px]`}
      >
        <SpeedInsights />
        <Analytics />
        <Header locale={locale} />
        <div className='fixed bottom-0 right-0 z-20 flex p-6 items-center flex-col gap-4'>
          <ScrollUpButton />
          <Link href={`/${locale}/donation`}>
            <Image
              width={100}
              height={100}
              src={donationLogo}
              alt='donation'
              className='h-24 w-24 bg-white border rounded-full'
            />
          </Link>
          <SecretDialog translation={secretTranslation} options={options} />
        </div>
        <main className='w-full'>{children}</main>
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
