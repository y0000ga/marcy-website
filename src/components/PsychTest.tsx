import { useState, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import PsychTestIcon_1 from '../assets/PsychTestIcon/PsychTestIcon(1).png'
import PsychTestIcon_2 from '../assets/PsychTestIcon/PsychTestIcon(2).png'
import PsychTestIcon_3 from '../assets/PsychTestIcon/PsychTestIcon(3).png'
import PsychTestIcon_4 from '../assets/PsychTestIcon/PsychTestIcon(4).png'
import PsychTestIcon_5 from '../assets/PsychTestIcon/PsychTestIcon(5).png'
import PsychTestIcon_6 from '../assets/PsychTestIcon/PsychTestIcon(6).png'
import { useTranslation } from 'react-i18next'
import Drawing, { brushArc } from 'react-drawing'

const psychTestIconData = [
  PsychTestIcon_1,
  PsychTestIcon_2,
  PsychTestIcon_3,
  PsychTestIcon_4,
  PsychTestIcon_5,
  PsychTestIcon_6,
]

interface PsychTestInputProps {
  adjective_1: string
  adjective_2: string
}

interface PsychTestProps {
  number: number
  topic: string
  children: React.ReactNode
}

const PsychTest: React.FC<PsychTestProps> = ({ number, topic, children }) => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm<PsychTestInputProps>()

  const onSubmit: SubmitHandler<PsychTestInputProps> = async (data, event) => {
    Swal.fire({
      imageUrl:
        psychTestIconData[Math.floor(Math.random() * psychTestIconData.length)],
      imageAlt: 'saying icon',
      title: `${topic}?`,
      text: `${data.adjective_1}且${data.adjective_2}`,
    })
    event?.target.reset()
  }

  return (
    <div className='my-4'>
      <div className='text-xl font-medium leading-loose tracking-widest text-sky-500 text-center'>
        {t('psyTest.no')}
        {number}
        {t('psyTest.question')}
      </div>
      <div className='border'>
        <div className='absolute text-9xl z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {children}
        </div>
        <div className='border cursor-pointer'>
          <Drawing
            brush={brushArc({
              fillStyle: '#0CA5E9',
              size: 5,
            })}
            height={350}
            width={350}
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        <div className='text-lg my-4 flex justify-between items-center'>
          <label className='w-1/3'>{t('psyTest.firstAdj')}</label>
          <input
            className='border border-gray-300 rounded-md w-2/3 mr h-10 pl-2'
            {...register('adjective_1', { required: true, maxLength: 10 })}
            maxLength={10}
          />
        </div>
        <div className='text-lg my-4 flex justify-between items-center'>
          <label className='w-1/3'>{t('psyTest.secondAdj')}</label>
          <input
            className='border border-gray-300 rounded-md w-2/3 mr h-10 pl-2'
            {...register('adjective_2', { required: true, maxLength: 10 })}
            maxLength={10}
          />
        </div>
        <div className='flex justify-around w-full'>
          <button className='border border-sky-500 m-4 h-10 w-1/2 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'>
            {t('psyTest.clearCanvas')}
          </button>
          <input
            type='submit'
            className='border border-sky-500 m-4 h-10 w-1/2 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'
            value={t('psyTest.checkAnswer') as string}
          />
        </div>
      </form>
    </div>
  )
}

export default PsychTest
