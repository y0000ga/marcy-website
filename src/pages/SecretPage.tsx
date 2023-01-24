import MainWrapper from '../Layout/MainWrapper'
import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import EmojiPicker from 'emoji-picker-react'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
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
  const navigate = useNavigate()
  const [isEmojiShown, setIsEmojiShown] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState<string>('😭')
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `感到 ${chosenEmoji} 的 ${data.nickname}...`,
      text: `你的${data.type}煩惱會隨著互動框一起消失`,
      showConfirmButton: false,
      timer: 1500,
    })
    navigate('/')
  }

  return (
    <MainWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <div className='my-2 text-xl flex items-center'>
          <label className='w-1/6 text-justify'>綽號</label>
          <input
            className='my-2 px-4 border border-gray-300 h-10 rounded-lg w-72'
            {...register('nickname', { required: true, maxLength: 20 })}
            maxLength={20}
          />
        </div>
        <div className='flex'>
          <div className='my-2 text-xl flex items-center w-1/2'>
            <label className='w-1/3 text-justify'>性別</label>
            <select
              className='my-2 border border-gray-300 h-10 rounded-lg w-28 px-4'
              {...register('gender', { required: true })}
            >
              <option value='female'>女</option>
              <option value='male'>男</option>
              <option value='other'>其他</option>
            </select>
          </div>
          <div className='my-2 text-xl flex items-center w-1/2'>
            <label className='text-justify w-1/3'>類型</label>
            <select
              className='my-2 border border-gray-300 h-10 rounded-lg w-28 px-4'
              {...register('type', { required: true })}
            >
              <option value='愛情'>愛情</option>
              <option value='友情'>友情</option>
              <option value='工作'>工作</option>
              <option value='其他'>其他</option>
            </select>
          </div>
        </div>
        <div className='my-2 text-xl flex items-start'>
          <label className='w-1/6 text-justify'>內容</label>
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
          <label className='w-1/6 text-justify'>心情</label>
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
        <input
          type='submit'
          className='border border-sky-500 m-4 h-10 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'
        />
      </form>
    </MainWrapper>
  )
}

export default SecretPage
