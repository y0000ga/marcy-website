import { Saying } from '../Saying'
import { SayingType } from '../Saying/index.type'

interface IProps {
  dictionaries: { title: string; text: string }[]
}

export const Dictionary = ({ dictionaries }: IProps) => (
  <ul className='leading-loose mt-4 text-justify grid grid-cols-1 gap-3 md:grid-cols-2'>
    {dictionaries.map(({ title, text }) => (
      <Saying
        key={title}
        title={title}
        text={text}
        type={SayingType.dictionary}
      />
    ))}
  </ul>
)
