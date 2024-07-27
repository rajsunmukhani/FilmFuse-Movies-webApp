import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Loading from './Components/Loading.jsx'
import Trending from './Components/Trending.jsx'

const App = () => {
  return (
    <div className='w-full flex h-screen bg-[#1F1E24]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </div>
  )
}

export default App