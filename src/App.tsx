import React from 'react'
import './base.module.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ActionPage from './pages/ActionPage'
import DonationPage from './pages/DonationPage'
import GamePage from './pages/GamePage'
import SayingPage from './pages/SayingPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='about' element={<AboutPage />} />
        <Route path='action' element={<ActionPage />} />
        <Route path='donation' element={<DonationPage />} />
        <Route path='game' element={<GamePage />} />
        <Route path='saying' element={<SayingPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
