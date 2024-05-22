'use client'

import { Language } from '@/helper/constant'
import { Locale } from '@/type/common.type'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { ILngLink, INavLink } from './index.type'
import { useMemo } from 'react'

const createHref = (
  pathname: string,
  locale: Locale,
  currentLocale: Locale
) => {
  const isHome = Object.keys(Language)
    .map((item) => (item === Language.zh ? '/' : `/${item}`))
    .includes(pathname)

  return isHome
    ? `/${locale}`
    : `/${locale}/${pathname
        .split('/')
        .slice(currentLocale === Locale.zh ? 1 : 2)
        .join('/')}`
}

export const LngLink = ({ children, locale }: ILngLink) => {
  const pathname = usePathname()
  const params = useParams()
  const lngHref = createHref(pathname, locale, params.locale as Locale)

  return (
    <Link
      href={lngHref}
      className={`hover:text-blue-500 ${
        params.locale === locale && 'text-blue-500'
      } mx-2`}
    >
      {children}
    </Link>
  )
}

export const NavLink = ({ children, pathname }: INavLink) => {
  const currentPathname = usePathname()
  const { locale } = useParams()
  const href = useMemo(() => `/${locale}${pathname}`, [locale, pathname])
  const isCurrent = useMemo(
    () =>
      href ===
      `${locale === Locale.zh ? `/${Locale.zh}` : ''}${currentPathname}`,
    [currentPathname, href, locale]
  )

  return (
    <Link
      href={href}
      className={`w-full h-12 flex justify-center items-center tracking-widest border-b cursor-pointer hover:text-blue-500 xl:border-none xl:w-fit mx-2 ${
        isCurrent && 'text-sky-500'
      }`}
    >
      {isCurrent && (
        <span className='flex h-3 w-3 mr-4 relative'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
        </span>
      )}
      {children}
    </Link>
  )
}
