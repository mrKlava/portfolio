import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CliPage, MainPage, NotFoundPage } from './pages'



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cli' element={<CliPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router