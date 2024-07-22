import React from 'react'
import Sidenav from './partials/Sidenav'

const Home = () => {
  return (
    <div className='w-full h-full flex'>

      <Sidenav />
      <div className='w-[80%] h-full'></div>

    </div>
  )
}

export default Home