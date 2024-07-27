import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const FullCards = ({data,title}) => {
  return data ? (
    <div className='flex flex-wrap item-center justify-center gap-3 px-5 py-10'>
        {data.map((elem,index) => (
            <Link key={index} className='w-[13vw] h-[30vh] bg-zinc-800 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-105 flex flex-col items-center justify-center gap-2'>
                <img 
                className='w-[15vh] object-cover'
                src={`https://image.tmdb.org/t/p/original/${
                    elem.poster_path ||
                    elem.backdrop_path}`} alt="" />
                    <h3 className='text-center text-l'>
                        {
                            elem.title || elem.name || elem.original_name || elem.original_title
                        }
                    </h3>
            </Link>
        ))}
    </div>
  ) : <Loading />
}

export default FullCards