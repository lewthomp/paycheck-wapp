import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

const NotFound = () => <h1>page not found</h1>

const Contents = () => {
  return (
      <Routes>
        <Route path='/' element={<App />}/>
        <Route element={<NotFound />} />
      </Routes>
  )
}

export default Contents