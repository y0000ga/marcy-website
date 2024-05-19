import { i18nRouter } from 'next-i18n-router'
import i18nConfig from '@/i18n/config'
import { NextRequest } from 'next/server'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const middleware = (req: NextRequest) => {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(ScrollTrigger)
  const { headers, nextUrl, method, body, url } = req
  const newHeaders = new Headers(headers)
  newHeaders.set('x-pathname', nextUrl.pathname)
  newHeaders.set('x-url', url)
  const newReq = new NextRequest(url, {
    headers: newHeaders,
    method,
    body,
  })

  return i18nRouter(newReq, i18nConfig)
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}
