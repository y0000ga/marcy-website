export enum TypeEnum {
  relationship = '愛情',
  friendship = '友情',
  career = '工作',
  other = '其他',
}

export interface ISecretForm {
  nickname: String
  content: TypeEnum
  type: string
}

export interface ISecretTranslation {
  submit: string
  feel: string
  someones: string
  yours: string
  disappear: string
  nickname: string
  keyInBadMood: string
  mood: string
  type: string
}

export const initEmoji = { chosen: '😭', shown: false }


