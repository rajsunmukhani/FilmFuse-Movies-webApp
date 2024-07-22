import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full p-5 border-r border-zinc-400'>
        <div className='flex gap-2 items-center'>
            <i className="text-[#6556CD] text-2xl ri-tv-fill"></i>
            <h4 className='text-white text-xl font-bold'>FilmFuse</h4>
        </div>
        <div className='flex flex-col text-white mt-5'>
            <h2 className='font-bold text-zinc-200'>
                New Feeds
            </h2>          
            <nav className='flex flex-col text-zinc-400'>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i class="ri-fire-fill"></i> Trending</Link>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i class="ri-bard-fill"></i> Popular</Link>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i class="ri-movie-2-fill"></i> Movies</Link>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i class="ri-tv-fill"></i> Tv Shows</Link>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i class="ri-team-fill"></i> People</Link>
            </nav>
            <hr className='border-none h-[1px] bg-zinc-400 mb-5' />
            <h2 className='font-bold text-zinc-200'>
                Website Information
            </h2> 
            <nav className='flex flex-col text-zinc-400'>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i class="ri-article-fill"></i> About</Link>
                <Link className='p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-md'><i class="ri-phone-fill"></i> Contact</Link>
            </nav>
        </div>
      </div>
  )
}

export default Sidenav