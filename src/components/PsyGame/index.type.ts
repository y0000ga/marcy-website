import { IWrapper } from "@/type/common.type"
import { MouseEventHandler } from "react"
import { UseFormRegister } from "react-hook-form"

export enum InputProp {
  adj1 = 'adj1',
  adj2 = 'adj2',
}

export interface IInputProps {
  label: string
  prop: InputProp
  register: UseFormRegister<IForm>
}

export interface IForm {
  adj1: string
  adj2: string
}

export interface IProps extends IWrapper {
  index: number
  topic: string
  translation: { adj1: string; adj2: string; check: string; clear: string }
}

export interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  name: string
  type?: 'button' | 'reset' | 'submit'
}
