import { IWrapper } from "@/type/common.type"
import { ISecretTranslation } from "@/type/secret.type"
import { ReactNode } from "react"

export interface IProps {
  options: string[]
  translation: ISecretTranslation
}

export interface IInputWrapperProps extends IWrapper {
  label: string
}