import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import FullCards from './partials/FullCards'
import Loading from './Loading'

const Trending = () => {
  const [category, setcategory] = useState('all');
  const [duration, setduration] = useState('day');
  const [trending, settrending] = useState([]);

  const navigate = useNavigate()


  const navigateBack = () => {
    navigate(-1);
  }

  const getTrending = async() => {
    try {
      const {data} = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
  },[category,duration])
  
  
  return trending.length > 0 ? (
    <div className='text-zinc-100 w-full px-8 overflow-hidden overflow-y-auto'>
        <div className='flex w-full items-center'>
            <div className='flex gap-2 item-center'>
                <i onClick={navigateBack} className="ri-arrow-left-line hover:text-[#6556CD] text-xl"></i>
                <h3 className='text-xl'>Trending</h3>
            </div>
            <Topnav />
            <div className='gap-2 flex items-center'>
                <Dropdown title='duration' options={['day','week']} changeCategory={(e) => setduration(e.target.value)} />
                <Dropdown title='filter' options={['all','movie','tv']} changeCategory={(e) => setcategory(e.target.value)} />
            </div>
        </div>
        <FullCards data={trending} title={category} />
    </div>
  ) : <Loading/>
}

export default Trending