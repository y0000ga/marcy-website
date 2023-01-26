import MainWrapper from '../Layout/MainWrapper'
import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import EmojiPicker from 'emoji-picker-react'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import secretIcon from '../assets/Figure/SecretIcon.png'

enum TypeEnum {
  relationship = '愛情',
  friendship = '友情',
  career = '工作',
  other = '其他',
}

interface IFormInput {
  nickname: String
  content: TypeEnum
  type: string
}

const SecretPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lng = localStorage.getItem('lng') as string
  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [i18n, lng])
  const navigate = useNavigate()
  const [isEmojiShown, setIsEmojiShown] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState<string>('😭')
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${t('secret.feel')} ${chosenEmoji} ${t('secret.someones')} ${
        data.nickname
      }...`,
      text: `${t('secret.yours')}${data.type}${t('secret.disappear')}`,
      showConfirmButton: false,
      timer: 1500,
    })
    navigate('/')
  }

  return (
    <MainWrapper>
      <div className='leading-loose mt-4 text-justify'>
        {t('pageOpeningData.secret.0')}
      </div>
      <img src={secretIcon} alt='secret' className='mx-auto my-8'/>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <div className='my-2 text-lg flex items-center'>
          <label className='text-justify mr-4'>{t('secret.nickname')}</label>
          <input
            className='my-2 px-4 border border-gray-300 h-10 rounded-lg'
            {...register('nickname', { required: true, maxLength: 20 })}
            maxLength={20}
          />
        </div>
        <div className='my-2 text-lg flex items-center'>
          <label className='text-justify mr-4'>{t('secret.type')}</label>
          <select
            className='my-2 border border-gray-300 h-10 rounded-lg px-8'
            {...register('type', { required: true })}
          >
            <option value={t('secret.relationship') as string}>
              {t('secret.relationship')}
            </option>
            <option value={t('secret.friendship') as string}>
              {t('secret.friendship')}
            </option>
            <option value={t('secret.career') as string}>
              {t('secret.career')}
            </option>
            <option value={t('secret.other') as string}>
              {t('secret.other')}
            </option>
          </select>
        </div>
        <textarea
          placeholder={t('keyInBadMood') as string}
          className='my-2 p-4 border text-lg border-gray-300 rounded-lg h-80 w-full'
          {...register('content', {
            required: true,
          })}
        />
        <div className='my-2 text-xl flex items-start'>
          <label className='mr-4 text-justify'>{t('secret.mood')}</label>
          <div className='flex'>
            {chosenEmoji}
            {chosenEmoji === '' ? (
              <BsEmojiSmileFill
                className='text-3xl cursor-pointer'
                onClick={() => {
                  setIsEmojiShown(!isEmojiShown)
                }}
              />
            ) : (
              <RxCross2
                className='text-3xl cursor-pointer'
                onClick={() => {
                  setChosenEmoji('')
                }}
              />
            )}
          </div>
        </div>
        <div>
          {isEmojiShown && (
            <EmojiPicker
              onEmojiClick={(event) => {
                setChosenEmoji(event.emoji)
                setIsEmojiShown(false)
              }}
            />
          )}
        </div>

        <button
          type='submit'
          className='border border-sky-500 my-4 h-10 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'
        >
          {t('secret.submit')}
        </button>
      </form>
    </MainWrapper>
  )
}

export default SecretPage
