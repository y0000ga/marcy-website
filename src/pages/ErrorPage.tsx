import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [navigate])
  return <div></div>
}

export default ErrorPage
