import Divider from '../Layout/Divider'
import { dotHistory, historyYear } from '../wordingData'
import { useState } from 'react'
import DotHistoryItem from './DotHistoryItem'

const DotHistory: React.FC = () => {
  const [year, setYear] = useState('all')
  const [history, setHistory] = useState(dotHistory)
  return (
    <>
      <Divider content='青點歷史' />
      <div className='leading-loose mt-4 text-justify flex flex-col items-center'>
        <select
          value={year}
          onChange={(event) => {
            setYear(event.target.value)
            if (event.target.value === '不限定年度') {
              setHistory(dotHistory)
              return
            }
            setHistory(
              dotHistory.filter((data) =>
                data.time.includes(event.target.value)
              )
            )
          }}
        >
          {historyYear.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        <ul>
          {history.map((history) => (
            <DotHistoryItem
              time={history.time}
              content={history.content}
              key={history.content}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default DotHistory
