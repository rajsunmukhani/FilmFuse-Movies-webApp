import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import axios from '../utils/axios'

const Home = () => {
  document.title = 'FilmFuse || Home'

  const [coverData, setCoverData] = useState(null);

  const getCoverData = async() => {
    try {
      const {data} = await axios.get('/trending/all/day');
      let cover = data.results[Math.floor(data.results.length * Math.random())];
      setCoverData(cover);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    !coverData && getCoverData();
  }, []);
  
  return (
    <div className='w-full h-full flex'>

      <Sidenav />
      <div className='w-[80%] h-full flex flex-col gap-5'>
        <Topnav />
        <Header data={coverData} />
      </div>

    </div>
  )
}

export default Home