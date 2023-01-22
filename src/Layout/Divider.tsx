interface DividerProps {
  content?: string
}

const Divider: React.FC<DividerProps> = ({ content }) => {
  return (
    <div className='inline-flex items-center justify-center w-full'>
      <hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
      <span className='absolute px-2 font-bold tracking-widest text-xl -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 flex items-center'>
        {content}
      </span>
    </div>
  )
}

export default Divider
