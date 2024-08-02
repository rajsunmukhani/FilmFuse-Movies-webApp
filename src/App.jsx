import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Trending from './Components/Trending.jsx'
import Popular from './Components/Popular.jsx'
import Movies from './Components/Movies.jsx'
import TvShows from './Components/TvShows.jsx'
import People from './Components/People.jsx'
import MovieDetails from './Components/MovieDetails.jsx'
import TvDetails from './Components/TvDetails.jsx'
import PersonDetails from './Components/PersonDetails.jsx'

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
        <Route path='/person/details/:id' element={<PersonDetails />} />  
        <Route path='/tv/details/:id' element={<TvDetails />} />  
        <Route path='/movie/details/:id' element={<MovieDetails />} />  
      </Routes>
    </div>
  )
}

export default App