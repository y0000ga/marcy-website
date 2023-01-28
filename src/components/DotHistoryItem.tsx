interface DotHistoryItemProps {
  time: string
  content: string
}

const DotHistoryItem: React.FC<DotHistoryItemProps> = ({ time, content }) => {
  return (
    <li className='my-8 p-4 animate-slowShown border rounded-md shadow-md'>
      <div className='text-sky-500 absolute -top-5 bg-white left-4 '>{time}</div>
      <div className='pt-4 pl-4'>{content}。</div>
      
    </li>
  )
}

export default DotHistoryItem
