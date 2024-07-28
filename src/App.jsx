import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Trending from './Components/Trending.jsx'
import Popular from './Components/Popular.jsx'
import Movies from './Components/Movies.jsx'
import TvShows from './Components/TvShows.jsx'
import People from './Components/People.jsx'

const App = () => {
  return (
    <div className='w-full flex h-screen bg-[#1F1E24]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tv' element={<TvShows />} />
        <Route path='/people' element={<People />} />
      </Routes>
    </div>
  )
}

export default App