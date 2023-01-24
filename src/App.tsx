import './base.module.scss'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ActionPage from './pages/ActionPage'
import DonationPage from './pages/DonationPage'
import GamePage from './pages/GamePage'
import SayingPage from './pages/SayingPage'
import ErrorPage from './pages/ErrorPage'
import SecretPage from './pages/SecretPage'
import DiscountPage from './pages/DiscountPage'

const App = () => {
  return (
    <div style={{minWidth: '390px'}}>
      <HashRouter>
        <Routes>
          <Route path='about' element={<AboutPage />} />
          <Route path='action' element={<ActionPage />} />
          <Route path='donation' element={<DonationPage />} />
          <Route path='game' element={<GamePage />} />
          <Route path='saying' element={<SayingPage />} />
          <Route path='secret' element={<SecretPage />} />
          <Route path='discount' element={<DiscountPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
