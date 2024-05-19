import { IWrapper } from "@/type/common.type"

interface IProps extends IWrapper {
  title: string
  url?: string
}

export const Donation = ({ children, title, url }: IProps) => {
  const defaultClassName =
    'flex flex-col text-lg tracking-widest leading-loose items-center my-4'
  const spanClassName = 'animate-bounce mt-2 hover:text-sky-500'
  if (!!url) {
    return (
      <a
        className={defaultClassName + ` cursor-pointer`}
        href={url}
        target='_blank'
      >
        {children}
        <span className={spanClassName}>{title}</span>
      </a>
    )
  }

  return (
    <div className={defaultClassName}>
      {children}
      <span className={spanClassName}>{title}</span>
    </div>
  )
}

