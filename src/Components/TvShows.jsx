import { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import FullCards from './partials/FullCards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'


const TvShows = () => {

  const [category, setcategory] = useState('airing_today');
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true)

  const navigate = useNavigate()


  const navigateBack = () => {
    navigate(-1);
  }

  const getTvShows = async() => {
    try {
      const {data} = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0){
        settv((prevData) => [...prevData, ...data.results]);
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
    settv([]);
    getTvShows();
  }

  useEffect(() => {
    refreshHandler();
  },[category])

  return (
    tv.length > 0 ? (
      <div className='text-zinc-100 w-full h-fit px-8 bg-[#1F1E24]'>
          <div className='flex w-full items-center'>
              <div className='flex gap-2 item-center'>
                  <i onClick={navigateBack} className="ri-arrow-left-line hover:text-[#6556CD] text-xl"></i>
                  <h3 className='text-xl whitespace-nowrap'>Tv Shows</h3>
              </div>
              <Topnav />
              <div className='gap-2 flex items-center'>
                  <Dropdown title='filter' options={['popular','top_rated','on_the_air','airing_today']} changeCategory={(e) => setcategory(e.target.value)} />
              </div>
          </div>
          <InfiniteScroll
          dataLength={tv.length}
          next={getTvShows}
          hasMore={hasMore}
          loader={<h1 className='text-white-200'>Loading..</h1>}
          >
            <FullCards data={tv} title={category} />
          </InfiniteScroll>
      </div>
    ) : <Loading/>
  )
}

export default TvShows