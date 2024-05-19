export interface IGuide {
  title: string
  imgUrl: string
  description: string
  videoUrl: string
  button: string
}

export interface IProps {
  guides: IGuide[]
}