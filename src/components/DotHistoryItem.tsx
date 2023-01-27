interface DotHistoryItemProps {
  time: string
  content: string
  children?: React.ReactNode
}

const DotHistoryItem: React.FC<DotHistoryItemProps> = ({
  time,
  content,
  children,
}) => {
  return (
    <li className='my-4 animate-slowShown'>
      <span className='text-sky-500'>{time}</span>
      <br />
      {content}
      {children}
    </li>
  )
}

export default DotHistoryItem
