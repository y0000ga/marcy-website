import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { advertiseInfo } from '../wordingData';

const AdvertiseBox: React.FC = () => {
  const enabled = true
  const [advertise, setAdvertise] = useState(0)
  useEffect(() => {
    let timeId: any
    if (enabled) {
      timeId = setInterval(() => {
        if (advertise === 4) {
          setAdvertise(0)
        } else {
          setAdvertise((prevAdvertise) => prevAdvertise + 1)
        }
      }, 2000)
    }
    return () => {
      clearInterval(timeId)
    }
  }, [advertise, enabled])

  const advertiseHandler = () => {
    setTimeout(() => {
      window.open(advertiseInfo[advertise].videoUrl, '_blank')
    })
  }
  return (
    <>
      <div className='flex justify-between -z-10'>
        <div
          className={`h-3 w-full bg-sky-500`}
          style={{ width: `${advertise * 2 + 2}0%` }}
        ></div>
        <div
          className='h-3 w-1/2 bg-gray-600'
          style={{ width: `${8 - advertise * 2}0%` }}
        ></div>
      </div>
      <div className='w-full overflow-hidden max-h-96  cursor-pointer select-none'>
        <div
          className='flex justify-center items-center'
          onClick={advertiseHandler}
        >
          <div className='absolute -z-10 flex justify-center text-center items-center text-neutral-600 text-md font-black'>
            {advertiseInfo[advertise].title}
          </div>
          <img
            src={advertiseInfo[advertise].imgUrl}
            alt='advertise'
            className='w-full -z-50 cursor-pointer opacity-40 transition-opacity'
          />
        </div>

        <div className='absolute bottom-0 flex flex-row w-full justify-center'>
          <BsArrowLeftSquareFill
            className='text-3xl mr-2 cursor-pointer'
            onClick={() => {
              if (advertise === 0) {
                setAdvertise(4)
              } else {
                setAdvertise((prevAdvertise) => prevAdvertise - 1)
              }
            }}
          />
          <BsArrowRightSquareFill
            className='text-3xl ml-2 cursor-pointer'
            onClick={() => {
              if (advertise === advertiseInfo.length - 1) {
                setAdvertise(0)
              } else {
                setAdvertise((prevAdvertise) => prevAdvertise + 1)
              }
            }}
          />
        </div>
      </div>
    </>
  )
}

export default AdvertiseBox
