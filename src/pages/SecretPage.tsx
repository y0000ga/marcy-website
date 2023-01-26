import MainWrapper from '../Layout/MainWrapper'
import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import EmojiPicker from 'emoji-picker-react'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

enum GenderEnum {
  female = '女',
  male = '男',
  other = '其他',
}

enum TypeEnum {
  relationship = '愛情',
  friendship = '友情',
  career = '工作',
  other = '其他',
}

interface IFormInput {
  nickname: String
  gender: GenderEnum
  content: TypeEnum
  type: string
}

const SecretPage: React.FC = () => {
  const { t } = useTranslation()
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
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <div className='my-2 text-xl flex items-center'>
          <label className='w-1/6 text-justify'>{t('secret.nickname')}</label>
          <input
            className='my-2 px-4 border border-gray-300 h-10 rounded-lg w-72'
            {...register('nickname', { required: true, maxLength: 20 })}
            maxLength={20}
          />
        </div>
        <div className='flex'>
          <div className='my-2 text-xl flex items-center w-1/2'>
            <label className='w-1/3 text-justify'>{t('secret.gender')}</label>
            <select
              className='my-2 border border-gray-300 h-10 rounded-lg w-28 px-4'
              {...register('gender', { required: true })}
            >
              <option value={t('secret.female') as string}>
                {t('secret.female')}
              </option>
              <option value={t('secret.male') as string}>
                {t('secret.male')}
              </option>
              <option value={t('secret.other') as string}>
                {t('secret.other')}
              </option>
            </select>
          </div>
          <div className='my-2 text-xl flex items-center w-1/2'>
            <label className='text-justify w-1/3'>{t('secret.type')}</label>
            <select
              className='my-2 border border-gray-300 h-10 rounded-lg w-28 px-4'
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
        </div>
        <div className='my-2 text-xl flex items-start'>
          <label className='w-1/6 text-justify'>{t('secret.content')}</label>
          <textarea
            className='my-2 p-4 border border-gray-300 rounded-lg w-72 h-80'
            {...register('content', {
              required: true,
              minLength: 1,
              maxLength: 100,
            })}
            maxLength={100}
          />
        </div>
        <div className='my-2 text-xl flex items-start'>
          <label className='w-1/6 text-justify'>{t('secret.mood')}</label>
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
        {isEmojiShown && (
          <EmojiPicker
            onEmojiClick={(event) => {
              setChosenEmoji(event.emoji)
              setIsEmojiShown(false)
            }}
          />
        )}
        <button
          type='submit'
          className='border border-sky-500 m-4 h-10 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'
        >
          {t('secret.submit')}
        </button>
      </form>
    </MainWrapper>
  )
}

export default SecretPage
