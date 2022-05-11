import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import Profile from './Profile';
import Shifts from './Shifts';

const NotFound = () => <h1>page not found</h1>

const Contents = () => {
  return (
      <Routes>
        {/* <Route path='/' element={<Dashboard />} /> */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shifts' element={<Shifts />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
  )
}

export default Contents