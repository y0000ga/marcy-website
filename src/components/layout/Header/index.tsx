import initTranslations from '@/i18n'
import { Sidebar } from './SideBar.client'
import { NavBar } from './NavBar'
import { Logo } from './Logo.client'
import Script from 'next/script'
import { Position } from './index.type'
import { ILocale } from '@/type/common.type'

const Header = async ({ locale }: ILocale) => {
  const { t } = await initTranslations(locale)
  return (
    <header className='relative w-full h-1/5 flex items-center justify-between border-b drop-shadow-2xl z-20'>
      <Script
        type='text/javascript'
        id='clarity-script'
        strategy='afterInteractive'
      >
        {`
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", ${process.env.CLARITY_KEY});
          `}
      </Script>
      <Logo>{t('marcyMailBox')}</Logo>
      <NavBar position={Position.top} locale={locale} />
      <Sidebar>
        <NavBar position={Position.left} locale={locale} />
      </Sidebar>
    </header>
  )
}

export default Header
