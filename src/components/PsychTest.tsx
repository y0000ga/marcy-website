import { useEffect, useState, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import PsychTestIcon_1 from '../assets/PsychTestIcon/PsychTestIcon(1).png'
import PsychTestIcon_2 from '../assets/PsychTestIcon/PsychTestIcon(2).png'
import PsychTestIcon_3 from '../assets/PsychTestIcon/PsychTestIcon(3).png'
import PsychTestIcon_4 from '../assets/PsychTestIcon/PsychTestIcon(4).png'
import PsychTestIcon_5 from '../assets/PsychTestIcon/PsychTestIcon(5).png'
import PsychTestIcon_6 from '../assets/PsychTestIcon/PsychTestIcon(6).png'
import { useTranslation } from 'react-i18next'

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
  const move = localStorage.getItem('move')
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm<PsychTestInputProps>()
  let lastPoint: { x?: number; y?: number } | null = {}
  const canvasRef = useRef<any>()
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const onSubmit: SubmitHandler<PsychTestInputProps> = async (data, event) => {
    Swal.fire({
      imageUrl:
        psychTestIconData[Math.floor(Math.random() * psychTestIconData.length)],
      imageAlt: 'saying icon',
      title: `${topic}?`,
      text: `${data.adjective_1}且${data.adjective_2}`,
    })
    event?.target.reset()
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  useEffect(() => {
    let savedCanvasRefCurrentValue: any
    const handleDrawCanvas = (point: { x: number; y: number }) => {
      const ctx = canvasRef.current.getContext('2d')
      ctx.strokeStyle = '#000000'
      ctx.lineWidth = 1
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.beginPath()
      ctx.moveTo(lastPoint?.x, lastPoint?.y)
      ctx.lineTo(point?.x, point?.y)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastPoint = { x: point?.x, y: point?.y }
      ctx.stroke()
      ctx.closePath()
    }

    const handleMouseMove = (e: any) => {
      localStorage.setItem('move', e.type)
      if (isDrawing) {
        if (move === 'touchmove') {
          let r = canvasRef.current.getBoundingClientRect()
          const point = {
            x: e.touches[0].clientX - r.left,
            y: e.touches[0].clientY - r.top,
          }
          handleDrawCanvas(point)
        } else if (move === 'mousemove') {
          const point = { x: e.offsetX, y: e.offsetY }
          handleDrawCanvas(point)
        }
      }
    }

    if (canvasRef && canvasRef.current) {
      canvasRef.current.addEventListener(move, handleMouseMove)
    }

    if (canvasRef.current) {
      savedCanvasRefCurrentValue = canvasRef.current
    }

    return () => {
      if (savedCanvasRefCurrentValue) {
        savedCanvasRefCurrentValue.removeEventListener(move, handleMouseMove)
      }
    }
  }, [isDrawing, canvasRef])

  const handleMouseDown = () => {
    setIsDrawing(true)
  }

  const handleMouseUp = () => {
    if (isDrawing) {
      setIsDrawing(false)
      lastPoint = null
    }
  }
  const clearHandler = () => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }
  return (
    <div className='my-4'>
      {move}
      <div className='text-xl font-medium leading-loose tracking-widest text-sky-500 text-center'>
        {t('psyTest.no')}
        {number}
        {t('psyTest.question')}
      </div>
      <div>
        {children}
        {move === 'mousemove' ? (
          <canvas
            id='canvas'
            className='border m-auto rounded-md my-4 z-10'
            ref={canvasRef}
            height={350}
            width={350}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOver={handleMouseUp}
          >
            {t('psyTest.unsupport')}
          </canvas>
        ) : (
          <canvas
            id='canvas'
            className='border m-auto rounded-md my-4 z-10'
            ref={canvasRef}
            height={350}
            width={350}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleMouseUp}
          >
            {t('psyTest.unsupport')}
          </canvas>
        )}
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
          <button
            onClick={clearHandler}
            className='border border-sky-500 m-4 h-10 w-1/2 rounded-lg text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer'
          >
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
