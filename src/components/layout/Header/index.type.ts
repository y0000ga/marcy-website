import { ILocale, IWrapper } from '@/type/common.type'

export enum Position {
  left,
  top,
}

export interface ILngLink extends IWrapper, ILocale {}

export interface INavLink extends IWrapper {
  pathname: string
}

export interface INavList extends ILocale {
  position: Position
}
