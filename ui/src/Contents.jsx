import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard';

const NotFound = () => <h1>page not found</h1>

const Contents = () => {
  return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/shifts' element={} /> */}
      </Routes>
  )
}

export default Contents