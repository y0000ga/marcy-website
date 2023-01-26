import { useNavigate, useLocation } from 'react-router-dom'
interface navItemProps {
  title: string
  pathname: string
}

const NavItem: React.FC<navItemProps> = ({ title, pathname }) => {
  const navigate = useNavigate()
  const currentPathname = useLocation().pathname
  return (
    <li
      className={`w-full h-12 flex justify-center items-center tracking-widest border-b cursor-pointer hover:text-blue-500 xl:border-none xl:w-fit mx-2 ${pathname === currentPathname && "text-sky-500"}`}
      onClick={() => {
        navigate(pathname)
      }}
    >
      {pathname === currentPathname && (
        <span className='flex h-3 w-3 mr-4'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
        </span>
      )}
      {title}
    </li>
  )
}

export default NavItem
