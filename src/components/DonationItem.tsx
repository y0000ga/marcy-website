interface DonationItemProps {
  children: React.ReactNode
  title: string
  url?: string
}

const DonationItem: React.FC<DonationItemProps> = ({
  children,
  title,
  url,
}) => {
  const donationHandler = () => {
    if (url) {
      setTimeout(() => {
        window.open(url, '_blank')
      })
    }
  }
  return (
    <div
      className={`flex flex-col text-lg tracking-widest leading-loose items-center my-4  ${
        url && 'cursor-pointer'
      }`}
      onClick={donationHandler}
    >
      {children}
      <span className='animate-bounce mt-2 hover:text-sky-500'>{title}</span>
    </div>
  )
}

export default DonationItem
