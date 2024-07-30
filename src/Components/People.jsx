import { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import FullCards from './partials/FullCards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
import Sidenav from './partials/Sidenav'

const People = () => {
  const [people, setpeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true)

  const navigate = useNavigate()


  const navigateBack = () => {
    navigate(-1);
  }

  const getPeople = async() => {
    try {
      const {data} = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length > 0){
        setpeople((prevData) => [...prevData, ...data.results]);
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
    setpeople([]);
    getPeople();
  }

  useEffect(() => {
    refreshHandler();
  },[])


  return (
    people.length > 0 ? (
      <div className='text-zinc-100 w-full h-fit mobile:px-0 px-8 bg-[#1F1E24]'>
         <div className='flex w-full items-center mobile:h-24 mobile:block mobile:items-start'>
              <div className='flex gap-2 mobile:hidden item-center'>
                  <i onClick={navigateBack} className="ri-arrow-left-line hover:text-[#6556CD] text-xl"></i>
                  <h3 className='text-xl whitespace-nowrap'>Person</h3>
              </div>
              <Topnav />
          </div>
          <InfiniteScroll
          dataLength={people.length}
          next={getPeople}
          hasMore={hasMore}
          loader={<h1 className='text-white-200'>Loading..</h1>}
          >
            <FullCards data={people} />
          </InfiniteScroll>
          <div className='w-full h-8vh hidden mobile:block'>
              <Sidenav />
            </div>
      </div>
    ) : <Loading/>
  )
}

export default People