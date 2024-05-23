'use client'

import { Language } from '@/helper/constant'
import { Locale } from '@/type/common.type'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { ILngLink, INavLink } from './index.type'
import { useMemo } from 'react'

export const LngLink = ({ children, locale }: ILngLink) => {
  const pathname = usePathname()
  const params = useParams()
  const lngHref = useMemo(() => {
    /**
     * 中文選項，目前在中文頁面
     * 英文選項，目前在英文頁面
     */
    if (params.locale === locale) {
      return pathname
    }

    /**
     * 中文選項，目前在英文頁面
     */
    if (params.locale === Locale.en && locale === Locale.zh) {
      return pathname.replace(Locale.en, Locale.zh)
    }

    /**
     * 英文選項，目前在中文頁面
     */
    if (params.locale === Locale.zh && locale === Locale.en) {
      return `/${locale}${pathname}`
    }

    return `/${Locale.zh}`
  }, [locale, params.locale, pathname])

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
    () => `${locale === Locale.zh ? '' : `/${Locale.en}`}${pathname}`,
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
