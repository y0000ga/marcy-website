export interface IDiscount {
  color: string
  type: string
  title: string
  service: string
  offer: string
  address?: string
  url: string
  location?: {
    lat: number
    lng: number
  }
  colorClass: string
}
