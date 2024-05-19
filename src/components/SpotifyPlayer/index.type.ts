export interface IEmbedController {
  loadUri: (uri: string) => void
}

export interface IIFrameAPI {
  createController: (
    element: HTMLElement | null,
    options: { width: string; height: string; uri: string },
    callback: (controller: IEmbedController) => void
  ) => void
}

export interface IProps {
  uri: string
  optionUris: string[]
}
