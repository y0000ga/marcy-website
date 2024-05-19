import { ISaying } from "@/type/saying.type";

export enum SayingType {
  dictionary,
  speak,
}

export interface IProps extends ISaying {
  type: SayingType
}