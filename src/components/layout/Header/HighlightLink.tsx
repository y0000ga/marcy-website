'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { ILngLink, INavLink } from './index.type'
import { useMemo } from 'react'
import i18nConfig from '@/i18n/config'

export const LngLink = ({ children, locale }: ILngLink) => {
  const pathname = usePathname()
  const params = useParams()
  const lngHref = useMemo(
    () =>
      params.locale === i18nConfig.defaultLocale
        ? `/${locale}${pathname}`
        : pathname.replace(params.locale as string, locale),
    [locale, params, pathname]
  )

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
  const href = useMemo(
    () =>
      locale === i18nConfig.defaultLocale ? pathname : `/${locale}${pathname}`,
    [locale, pathname]
  )

  return (
    <Link
      href={href}
      className={`w-full h-12 flex justify-center items-center tracking-widest border-b cursor-pointer hover:text-blue-500 xl:border-none xl:w-fit mx-2 ${
        href === currentPathname && 'text-sky-500'
      }`}
    >
      {href === currentPathname && (
        <span className='flex h-3 w-3 mr-4 relative'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75' />
          <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500' />
        </span>
      )}
      {children}
    </Link>
  )
}
