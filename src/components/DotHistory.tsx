import Divider from '../Layout/Divider'
import { useState } from 'react'
import DotHistoryItem from './DotHistoryItem'
import { useTranslation } from 'react-i18next'

const DotHistory: React.FC = () => {
  const { t } = useTranslation()
  const dotHistory = [
    {
      time: '2013/12/14',
      content: t('dotHistory.20131214'),
    },
    {
      time: '2014/08/02',
      content: t('dotHistory.20140802'),
    },
    {
      time: '2015/08/10',
      content: t('dotHistory.20150810'),
    },
    {
      time: '2016/1/23',
      content: t('dotHistory.20160123'),
    },
    { time: '2016/11/20', content: t('dotHistory.20161120') },
    {
      time: '2017/03/07',
      content: t('dotHistory.20170307'),
    },
    {
      time: '2017/12/29',
      content: t('dotHistory.20171229'),
    },
    {
      time: '2018/03/18',
      content: t('dotHistory.20180318'),
    },
    {
      time: '2018/05/19',
      content: t('dotHistory.20180519'),
    },
    {
      time: '2018/11/25',
      content: t('dotHistory.20181125'),
    },
    {
      time: '2018/11/06',
      content: t('dotHistory.20181106'),
    },
    {
      time: '2019/03/31',
      content: t('dotHistory.20190331'),
    },
    {
      time: '2019/07/20',
      content: t('dotHistory.20190720'),
    },
    { time: '2019/09/09', content: t('dotHistory.20190909') },
    {
      time: '2020/04/27',
      content: t('dotHistory.20200427'),
    },
    {
      time: '2020/11/22',
      content: t('dotHistory.20201122'),
    },
    {
      time: '2020/10/18',
      content: t('dotHistory.20201018'),
    },
    {
      time: '2020/12/2',
      content: t('dotHistory.20201202'),
    },
    { time: '2021/03/07', content: t('dotHistory.20210307') },
    {
      time: '2021/07/18',
      content: t('dotHistory.20210718'),
    },
    {
      time: '2021/07/05',
      content: t('dotHistory.20210705'),
    },
    {
      time: '2021/10/15',
      content: t('dotHistory.20211015'),
    },
    {
      time: '2021/11/10',
      content: t('dotHistory.20211110'),
    },
    { time: '2022/01/05', content: t('dotHistory.20220105') },
    {
      time: '2022/01/22',
      content: t('dotHistory.20220122'),
    },
    {
      time: '2022/02/01',
      content: t('dotHistory.20220201'),
    },
    {
      time: '2022/03/20',
      content: t('dotHistory.20220320'),
    },
    { time: '2022/07/02', content: t('dotHistory.20220702') },
    {
      time: '2022/09/17',
      content: t('dotHistory.20220917'),
    },
    {
      time: '2022/09/30',
      content: t('dotHistory.20220930'),
    },
    {
      time: '2022/10/01',
      content: t('dotHistory.20221001'),
    },
    {
      time: '2022/12/01',
      content: t('dotHistory.20221201'),
    },
    {
      time: '2023/01/19',
      content: t('dotHistory.20230119'),
    },
  ]
  const [year, setYear] = useState('all')
  const [history, setHistory] = useState(dotHistory)
  const allHistoryYear = [
    t('unlimitedYear'),
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
  ]

  return (
    <>
      <Divider content={t('divider.history') as string} />
      <div className='leading-loose mt-4 text-justify flex flex-col'>
        <select
        className='border w-80 p-2 my-4 rounded-lg left-1/2 -translate-x-1/2'
          value={year}
          onChange={(event) => {
            setYear(event.target.value)
            if (event.target.value === t('unlimitedYear')) {
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
          {allHistoryYear.map((year) => (
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
