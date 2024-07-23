import React from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'

const Home = () => {
  return (
    <div className='w-full h-full flex'>

      <Sidenav />
      <div className='w-[80%] h-full'>
        <Topnav />
      </div>

    </div>
  )
}

export default Home