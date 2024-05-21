export interface IItemProps {
  type: string
  url: string
  service: string
  address?: string
  offer: string
  colorClass: string
  title: string
  isList: boolean
}

export interface IProps {
  types: string[]
  name: string
  discounts: {
    type: string
    title: string
    service: string
    offer: string
    url: string
    colorClass: string
    address?: string
  }[]
}
