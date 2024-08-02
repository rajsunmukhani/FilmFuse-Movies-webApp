import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import FullCards from './partials/FullCards';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Sidenav from './partials/Sidenav';

const Popular = () => {
    const [category, setcategory] = useState('movie');
    const [popular, setpopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
      }
    
      const getPopular = async() => {
        try {
          const {data} = await axios.get(`/${category}/popular?page=${page}`);
          if (data.results.length > 0){
            setpopular((prevData) => [...prevData, ...data.results]);
            setPage(page + 1);
          }else{
            setHasMore(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const refreshHandler = () => {
        setPage(1);
        setpopular([]);
        getPopular();
      }
    
      useEffect(() => {
        refreshHandler();
      },[category])
      

      return popular.length > 0 ? (
        <div className='text-zinc-100 w-full h-fit mobile:px-0 px-8 bg-[#1F1E24]'>
           <div className='flex w-full items-center mobile:h-24 mobile:block mobile:items-start'>
                <div className='flex mobile:hidden gap-2 item-center'>
                    <i onClick={navigateBack} className="ri-arrow-left-line hover:text-[#6556CD] text-xl"></i>
                    <h3 className='text-xl'>Popular</h3>
                </div>
                <Topnav />
                <div className='gap-2 flex items-center mobile:hidden'> 
                <Dropdown title={category} options={['movie','tv']} changeCategory={(e) => setcategory(e.target.value)} />
                </div>
            </div>
            <InfiniteScroll
            dataLength={popular.length}
            next={getPopular}
            hasMore={hasMore}
            loader={<h1 className='text-white-200'>Loading..</h1>}
            >
              <FullCards data={popular} title={category} />
            </InfiniteScroll>
            <div className='w-full h-8vh hidden mobile:block'>
              <Sidenav />
            </div>
        </div>
      ) : <Loading />
}

export default Popular