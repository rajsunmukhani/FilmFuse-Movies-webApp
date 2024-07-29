import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-[20%]
    mobile:bg-zinc-800 mobile:fixed mobile:bottom-0 mobile:h-[8vh] mobile:flex mobile:w-full
     h-full p-5 border-r border-zinc-400 mobile:p-0'
    >
        <div className='flex gap-2 mobile:hidden items-center'>
            <i className="text-[#6556CD] text-2xl ri-tv-fill"></i>
            <h4 className='text-white text-xl font-bold'>FilmFuse</h4>
        </div>
        <div className='flex flex-col text-white mt-5 mobile:w-full mobile:h-full'>
            <h2 className='font-bold text-zinc-200 mobile:hidden'>
                New Feeds
            </h2>          
            <nav className='flex flex-col mobile:flex-row mobile:items-center mobile:w-full mobile:text-3xl mobile:text-[#6556CD] mobile:justify-evenly text-zinc-400'>
                <Link to={'/trending'} className='p-5 hover:bg-[#6556CD] mobile:p-0 hover:text-white duration-300 rounded-md'><i className="ri-fire-fill"></i> <span className='mobile:hidden'>Trending</span> </Link>
                <Link to={'/popular'} className='p-5 hover:bg-[#6556CD] mobile:p-0 hover:text-white duration-300 rounded-md'><i className="ri-bard-fill"></i> <span className='mobile:hidden'>Popular</span> </Link>
                <Link to={'/movies'} className='p-5 hover:bg-[#6556CD] mobile:p-0 hover:text-white duration-300 rounded-md'><i className="ri-movie-2-fill"></i> <span className='mobile:hidden'>Movies</span> </Link>
                <Link to={'/tv'} className='p-5 hover:bg-[#6556CD] mobile:p-0 hover:text-white duration-300 rounded-md'><i className="ri-tv-fill"></i> <span className='mobile:hidden'>Tv Shows</span> </Link>
                <Link to={'/people'} className='p-5 hover:bg-[#6556CD] mobile:p-0 hover:text-white duration-300 rounded-md'><i className="ri-team-fill"></i> <span className='mobile:hidden'>People</span> </Link>
            </nav>
            <hr className='border-none mobile:hidden h-[1px] bg-zinc-400 mb-5' />
            <h2 className='font-bold mobile:hidden text-zinc-200'>
                Website Information
            </h2> 
            <nav className='flex flex-col mobile:hidden text-zinc-400'>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i className="ri-article-fill"></i> About</Link>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i className="ri-phone-fill"></i> Contact</Link>
            </nav>
        </div>
      </div>
  )
}

export default Sidenav