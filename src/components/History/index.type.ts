export interface IItemProps {
  time: number
  content: string
}

export interface IProps {
  dotHistory: {
    time: number
    content: string
  }[]
  yearOptions: string[]
}