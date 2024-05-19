'use client'

import { useState } from 'react'
import { CustomDialog } from '../CustomDialog'
import Image from 'next/image'
import logo from '/public/assets/Logo/marcyLogo.svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import EmojiPicker from 'emoji-picker-react'
import { MouseDownEvent } from 'emoji-picker-react/dist/config/config'
import secretIcon from '/public/assets/Figure/SecretIcon.png'
import { ISecretForm, initEmoji } from '@/type/secret.type'
import { IInputWrapperProps, IProps } from './index.type'

const InputWrapper = ({ children, label }: IInputWrapperProps) => (
  <div className='my-2 text-lg flex items-center'>
    <label className='text-justify mr-4'>{label}</label>
    {children}
  </div>
)

export const SecretDialog = ({ translation, options }: IProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [emoji, setEmoji] = useState(initEmoji)

  const { register, handleSubmit, reset } = useForm<ISecretForm>()

  const onSubmit: SubmitHandler<ISecretForm> = async (data) => {
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${translation.feel} ${emoji.chosen} ${translation.someones} ${data.nickname}...`,
      text: `${translation.yours}${data.type}${translation.disappear}`,
      showConfirmButton: false,
      timer: 1500,
    })
    setEmoji(initEmoji)
    reset()
    setOpen(false)
  }

  const onClose = () => {
    setEmoji(initEmoji)
    reset()
    setOpen(false)
  }

  const emojiClick: MouseDownEvent = (event) => {
    setEmoji({ chosen: event.emoji, shown: false })
  }
  return (
    <>
      <CustomDialog
        open={open}
        onCancel={onClose}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
      >
        <form className='flex flex-col'>
          <Image
            height={200}
            width={200}
            src={secretIcon}
            alt='跟瑪麗說祕密'
            className='mx-auto my-8 w-44 h-36'
          />
          <InputWrapper label={translation.nickname}>
            <input
              required
              className='p-3 my-2 border border-gray-300 h-10 rounded-lg'
              {...register('nickname', { required: true, maxLength: 20 })}
              maxLength={20}
            />
          </InputWrapper>
          <InputWrapper label={translation.type}>
            <select
              required
              className='p-2 my-2 border border-gray-300 h-10 rounded-lg'
              {...register('type', { required: true })}
            >
              {options.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </InputWrapper>
          <textarea
            required
            placeholder={translation.keyInBadMood}
            className='my-2 p-4 border text-lg border-gray-300 rounded-lg h-60 w-full resize-none'
            {...register('content', {
              required: true,
            })}
          />
          <InputWrapper label={translation.mood}>
            <div
              className='flex cursor-pointer'
              onClick={() =>
                setEmoji((prev) => ({ ...prev, shown: !prev.shown }))
              }
            >
              {emoji.chosen}
            </div>
          </InputWrapper>
          {emoji.shown && <EmojiPicker onEmojiClick={emojiClick} />}
        </form>
      </CustomDialog>
      <button onClick={() => setOpen(true)}>
        <Image
          width={100}
          height={100}
          src={logo}
          alt='給秘密給馬信吧'
          className='h-24 w-24 border rounded-full bg-white'
        />
      </button>
    </>
  )
}
