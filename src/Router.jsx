import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CliPage, MainPage, NotFoundPage } from './pages'



function Router() {
  return (
    <BrowserRouter >
      <Routes basename='/portfolio'>
        <Route path='/portfolio' element={<MainPage />} />
        <Route path='/portfolio/cli' element={<CliPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router