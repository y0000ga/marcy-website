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
    <li>
      <span className='text-sky-500'>{time}</span>
      <br />
      {content}
      {children}
    </li>
  )
}

export default DotHistoryItem
