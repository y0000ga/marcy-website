import { ReactNode } from 'react'

export enum Locale {
  en = 'en',
  zh = 'zh',
}

export const Route = {
  about: 'navItemInfo.0.title',
  action: 'navItemInfo.1.title',
  saying: 'navItemInfo.2.title',
  donation: 'navItemInfo.3.title',
  game: 'navItemInfo.4.title',
  discount: 'navItemInfo.6.title',
}

export interface IWrapper {
  children: ReactNode
}

export interface ILocale {
  locale: Locale
}

export interface IPage {
  params: ILocale
}

export interface ILayout extends IWrapper, IPage {}

export enum Status {
  failed = 'failed',
  success = 'success',
}

export enum ProductType {
  book,
  creation,
}
