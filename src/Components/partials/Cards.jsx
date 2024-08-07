import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data}) => {
  return data.length > 0 ? (
    <div className='w-full min-h-[50vh]'>
      <div className='w-[100%] min-h-[85%] gap-5 mobile:flex-wrap mobile:overflow-y-auto flex overflow-y-hidden mobile:overflow-x-hidden overflow-x-auto pb-5'>
        {data.map((element,index) => (
          <Link to={`/${element.media_type}/details/${element.id}`} key={index} className='min-w-[17%] h-[full] bg-zinc-900 shadow-lg hover:scale-105 mobile:hover:scale-100 flex flex-col gap-2 mobile:gap-0 mt-3 rounded overflow-hidden'>
            <img className='h-1/2 w-full object-cover object-center' src={`https://image.tmdb.org/t/p/original/${element.backdrop_path || element.poster_path}`} alt="" />
            <h3 className='text-zinc-400 overflow-hidden mobile:text-2xl px-2 h-[18%] leading-[1.25]'>{element.title || element.name || element.original_title || element.original_name}</h3>
            <p className='text-zinc-600 mobile:text-lg text-sm leading-[1.25] px-2'>{element.overview.slice(0,65)}</p>
          </Link>
        ))}
      </div>
    </div>
  ) : <div className='w-full h-[50vh] font-black flex items-center justify-center font-2xl'>No Data Found!</div>
}

export default Cards