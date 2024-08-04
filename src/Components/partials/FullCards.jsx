import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const FullCards = ({data , title}) => {
    
  return data ? (
    <div className='flex flex-wrap item-center justify-center gap-3 mobile:px-0 px-5 py-10'>
        {data.map((elem,index) => (
            <Link to={`/${elem.media_type || title}/details/${elem.id}`} key={index} className='w-[13vw] mobile:w-2/3 relative h-[35vh] rounded-lg bg-zinc-800 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mobile:hover:scale-100 hover:scale-105 mobile:gap-1 flex flex-col items-center gap-2'>
                <img 
                className='w-[15vh] h-[65%] object-cover'
                src={`https://image.tmdb.org/t/p/original/${
                    elem.poster_path ||
                    elem.backdrop_path ||
                    elem.profile_path 
                    }`} alt="" />
                    <h3 className='text-center text-l w-full h-[18%]'>
                        {
                            elem.title || elem.name || elem.original_name || elem.original_title
                        }
                    </h3>
                        {elem.vote_average > 0 && (
                            <div className='flex px-2 items-center w-full gap-1'>
                               Viewers' Ratings : <h1 className={elem.vote_average >= 6 ? 'text-green-500' : 'text-red-500'} >{(elem.vote_average *10).toFixed()}</h1> 
                                <sup className={elem.vote_average >= 6 ? 'text-green-500' : 'text-red-500'}>%</sup>
                            </div>)}
            </Link>
        ))}
    </div>
  ) : <Loading />
}

export default FullCards