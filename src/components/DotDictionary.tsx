import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'
import { dotDictionaryData } from '../wordingData'
const DotDictionary: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Divider content={t('divider.dictionary') as string} />
      <div className='leading-loose mt-4 text-justify flex flex-col items-center'>
        <ul>
          {dotDictionaryData.map((word) => (
            <li key={word.title}>
              <span className='font-semibold'>{word.title}</span>
              <br />
              {word.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DotDictionary
