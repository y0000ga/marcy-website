import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('home')
  }, [navigate])
  return <></>
}

export default ErrorPage
