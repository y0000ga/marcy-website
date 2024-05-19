import initTranslations from '@/i18n'
import { Locale, Route } from '@/type/common.type'
import { LngLink, NavLink } from './HighlightLink'
import { Language } from '@/helper/constant'
import { INavList, Position } from './index.type'

export const NavBar = async ({ position, locale }: INavList) => {
  const { t } = await initTranslations(locale)
  const navs = Object.entries(Route).map(([key, value]) => ({
    title: t(value),
    pathname: '/' + key,
  }))

  return (
    <nav
      className={
        position === Position.left
          ? 'absolute top-full w-full border-t bg-white z-50 xl:hidden'
          : 'hidden xl:flex'
      }
    >
      {navs.map(({ title, pathname }) => (
        <NavLink key={pathname} pathname={pathname}>
          {title}
        </NavLink>
      ))}
      <div className='w-full h-12 flex justify-center items-center tracking-widest border-b cursor-pointer xl:border-none xl:w-fit mx-2'>
        {Object.entries(Language).map(([locale, name], index, array) => (
          <>
            <LngLink locale={locale as Locale} key={locale}>
              {name}
            </LngLink>
            {index !== array.length - 1 && '|'}
          </>
        ))}
      </div>
    </nav>
  )
}
