'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import { MouseEventHandler, useRef } from 'react'
import { psychTestIcons } from '@/helper/constant'
import { random } from 'lodash'
import {
  IInputProps,
  IButtonProps,
  IProps,
  IForm,
  InputProp,
} from './index.type'

const Input = ({ label, register, prop }: IInputProps) => (
  <div className='text-lg my-4 flex justify-between items-center'>
    <label className='w-1/3'>{label}</label>
    <input
      className='border border-gray-300 rounded-md w-2/3 mr h-10 pl-2'
      {...register(prop, { required: true, maxLength: 10 })}
      maxLength={10}
    />
  </div>
)

const Button = ({ onClick, name, type = 'button' }: IButtonProps) => (
  <button
    className='border border-sky-500 m-4 h-10 w-1/2 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'
    onClick={onClick}
    type={type}
  >
    {name}
  </button>
)

export const PsyGame = ({
  indexPrefix,
  translation,
  topic,
  children,
}: IProps) => {
  const canvasRef = useRef<any>(null)
  const { register, handleSubmit } = useForm<IForm>()
  const { adj1, adj2, clear, check } = translation
  const onSubmit: SubmitHandler<IForm> = async (data, event) => {
    const index = random(0, psychTestIcons.length - 1)
    const { src } = psychTestIcons[`${index}`]
    Swal.fire({
      imageUrl: src,
      imageAlt: `${topic}?`,
      title: `${topic}?`,
      text: `${data.adj1} + ${data.adj2}`,
    })
    event?.target.reset()
    const { current } = canvasRef
    current?.clearCanvas()
  }

  const clearCanvas: MouseEventHandler<HTMLButtonElement> = (event) => {
    const { current } = canvasRef
    event.preventDefault()
    current?.clearCanvas()
  }
  return (
    <div className='my-4 relative'>
      <div className='text-xl font-medium leading-loose tracking-widest text-sky-500 text-center'>
        {indexPrefix}
      </div>
      <div className='border relative'>
        <div className='absolute text-9xl  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {children}
        </div>
        <ReactSketchCanvas
          canvasColor='transparent'
          strokeWidth={2}
          strokeColor='blue'
          width='350px'
          height='350px'
          ref={canvasRef}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        <Input register={register} prop={InputProp.adj1} label={adj1} />
        <Input register={register} prop={InputProp.adj2} label={adj2} />
        <div className='flex justify-around w-full'>
          <Button onClick={clearCanvas} name={clear} />
          <Button type='submit' name={check} />
        </div>
      </form>
    </div>
  )
}
