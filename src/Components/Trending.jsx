import { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import FullCards from './partials/FullCards'
import SideNav from './partials/Sidenav'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
import Sidenav from './partials/Sidenav'

const Trending = () => {
  const [category, setcategory] = useState('all');
  const [duration, setduration] = useState('day');
  const [trending, settrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true)

  const navigate = useNavigate()


  const navigateBack = () => {
    navigate(-1);
  }

  const getTrending = async() => {
    try {
      const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if (data.results.length > 0){
        settrending((prevData) => [...prevData, ...data.results]);
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
    settrending([]);
    getTrending();
  }

  useEffect(() => {
    refreshHandler();
  },[category,duration])
  
  
  return trending.length > 0 ? (
    <div className='text-zinc-100 w-full h-fit mobile:px-0 px-8 bg-[#1F1E24]'>
        <div className='flex w-full items-center mobile:h-24 mobile:block mobile:items-start'>
            <div className='flex gap-2 mobile:hidden item-center'>
                <i onClick={navigateBack} className="ri-arrow-left-line hover:text-[#6556CD] text-xl"></i>
                <h3 className='text-xl'>Trending</h3>
            </div>
            <Topnav />
            <div className='gap-2 flex items-center mobile:hidden'>
                <Dropdown title={duration} options={['day','week']} changeCategory={(e) => setduration(e.target.value)} />
                <Dropdown title={category} options={['all','movie','tv']} changeCategory={(e) => setcategory(e.target.value)} />
            </div>
        </div>
        <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1 className='text-white-200'>Loading..</h1>}
        >
          <FullCards data={trending} title={category} />
        </InfiniteScroll>
        <div className='w-full h-8vh hidden mobile:block'>
              <Sidenav />
            </div>
    </div>
  ) : <Loading/>
}

export default Trending