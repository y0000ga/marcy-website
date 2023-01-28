interface DotHistoryItemProps {
  time: string
  content: string
}

const DotHistoryItem: React.FC<DotHistoryItemProps> = ({ time, content }) => {
  return (
    <li className='my-8 p-4 animate-slowShown border rounded-md shadow-md'>
      <span className='text-sky-500'>{time}</span>
      <br />
      {content}。
    </li>
  )
}

export default DotHistoryItem
