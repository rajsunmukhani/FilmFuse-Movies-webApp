import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import axios from '../utils/axios'
import Cards from './partials/Cards'
import Loading from './Loading'
import Dropdown from './partials/Dropdown'

const Home = () => {
  document.title = 'FilmFuse || Home'

  const [coverData, setCoverData] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState('all')

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
      const {data} = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getTrending();
    !coverData && getCoverData();
  }, [category]);


  
  return coverData && trending ? (
    <>
      <Sidenav />
      <div className='w-[80%] min-h-full flex flex-col gap-3 px-5 overflow-y-auto'>
        <Topnav />
        <Header data={coverData} />

        <div className='flex items-center justify-between'>
          <h1 className='text-3xl inline mt-5 text-zinc-200 font-black'>Trending...</h1>
          <Dropdown
          title="filter" 
          options={['all','movie','tv']}
          changeCategory={(e)=>setCategory(e.target.value)}
           />
        </div>
        <Cards data={trending}/>
      </div>
    </>
  ) : <Loading />
}

export default Home