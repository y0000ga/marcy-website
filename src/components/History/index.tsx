'use client'

import { useState } from 'react'
import { IItemProps, IProps } from './index.type.js'

const HistoryItem = ({ time, content }: IItemProps) => {
  const formattedTime =
    time.toString().substring(0, 4) +
    '/' +
    time.toString().substring(4, 6) +
    '/' +
    time.toString().substring(6, 8)
  return (
    <li className='my-8 p-4 animate-slowShown border rounded-md shadow-md'>
      <span className='text-sky-500'>{formattedTime}</span>
      <br />
      {content}。
    </li>
  )
}

export const History = ({ dotHistory, yearOptions }: IProps) => {
  const [year, setYear] = useState('all')
  const [history, setHistory] = useState(dotHistory)

  return (
    <div className='leading-loose mt-4 text-justify flex flex-col items-center relative'>
      <select
        className='border w-80 p-2 my-4 rounded-lg'
        value={year}
        onChange={({ target }) => {
          const { value } = target
          setYear(value)
          if (value === yearOptions[0]) {
            setHistory(dotHistory)
          } else {
            setHistory(
              dotHistory.filter(({ time }) => time.toString().includes(value))
            )
          }
        }}
      >
        {yearOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <ul>
        {history.map(({ time, content }) => (
          <HistoryItem time={time} content={content} key={content} />
        ))}
      </ul>
    </div>
  )
}
