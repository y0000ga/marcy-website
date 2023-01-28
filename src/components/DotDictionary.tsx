import { useTranslation } from 'react-i18next'
import Divider from '../Layout/Divider'
import DotDictionaryItem from './DotDictinaryItem'

const DotDictionary: React.FC = () => {
  const { t } = useTranslation()
  const dotDictionary = [
    {
      title: t('dotDictionary01.title'),
      description: t('dotDictionary01.description'),
    },
    {
      title: t('dotDictionary02.title'),
      description: t('dotDictionary02.description'),
    },
    {
      title: t('dotDictionary03.title'),
      description: t('dotDictionary03.description'),
    },
    {
      title: t('dotDictionary04.title'),
      description: t('dotDictionary04.description'),
    },
    {
      title: t('dotDictionary05.title'),
      description: t('dotDictionary05.description'),
    },
    {
      title: t('dotDictionary06.title'),
      description: t('dotDictionary06.description'),
    },
    {
      title: t('dotDictionary07.title'),
      description: t('dotDictionary07.description'),
    },
    {
      title: t('dotDictionary08.title'),
      description: t('dotDictionary08.description'),
    },
    {
      title: t('dotDictionary09.title'),
      description: t('dotDictionary09.description'),
    },
  ]
  return (
    <>
      <Divider content={t('divider.dictionary') as string} />
      <div className='leading-loose mt-4 text-justify flex flex-col'>
        <ul className='md:flex md:flex-wrap'>
          {dotDictionary.map((word) => (
            <DotDictionaryItem
              key={word.title}
              title={word.title}
              description={word.description}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default DotDictionary
