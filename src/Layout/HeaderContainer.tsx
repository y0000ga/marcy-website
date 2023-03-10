import WeatherBox from '../components/WeatherBox'
import AdvertiseBox from '../components/AdvertiseBox'
import { useLocation } from 'react-router-dom'
import TitleBackground from '../components/TitleBackground'

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const pathname: string = useLocation().pathname
  return (
    <>
      {pathname === '/home' && (
        <>
          <WeatherBox />
          <AdvertiseBox />
        </>
      )}
      {(pathname === '/about' ||
        pathname === '/action' ||
        pathname === '/saying' ||
        pathname === '/donation' ||
        pathname === '/game' ||
        pathname === '/discount' ||
        pathname === '/secret') && <TitleBackground pathname={pathname} />}
    </>
  )
}

export default HeaderContainer
