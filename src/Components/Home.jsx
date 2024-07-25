import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import axios from '../utils/axios'
import Cards from './partials/Cards'
import Loading from './Loading'

const Home = () => {
  document.title = 'FilmFuse || Home'

  const [coverData, setCoverData] = useState(null);
  const [trending, setTrending] = useState(null);

  const getCoverData = async() => {
    try {
      const {data} = await axios.get('/trending/all/day');
      let cover = data.results[Math.floor(data.results.length * Math.random())];
      setCoverData(cover);
    } catch (error) {
      console.log(error);
    }
  };
  const getTrending = async() => {
    try {
      const {data} = await axios.get('/trending/all/day');
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    !coverData && getCoverData();
    !trending && getTrending();
  }, []);

  
  return coverData && trending ? (
    <>
      <Sidenav />
      <div className='w-[80%] min-h-full flex flex-col gap-3 px-5 overflow-y-auto'>
        <Topnav />
        <Header data={coverData} />
        <Cards data={trending}/>
      </div>
    </>
  ) : <Loading />
}

export default Home