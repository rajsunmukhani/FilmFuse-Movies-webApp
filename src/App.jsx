import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'

const App = () => {
  return (
    <div className='w-full h-screen bg-[#1F1E24]'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App