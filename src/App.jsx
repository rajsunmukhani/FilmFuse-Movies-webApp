import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Trending from './Components/Trending.jsx'
import Popular from './Components/Popular.jsx'

const App = () => {
  return (
    <div className='w-full flex h-screen bg-[#1F1E24]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
      </Routes>
    </div>
  )
}

export default App