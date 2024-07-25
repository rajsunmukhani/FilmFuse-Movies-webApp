import React from 'react'

const Cards = ({data}) => {
  console.log(data);
  return (
    <div className='w-full min-h-[50vh]'>
      <h1 className='text-3xl mt-5 text-zinc-200 font-black'>Trending...</h1>
      <div className='w-[100%] h-[85%] gap-5 flex overflow-y-hidden overflow-x-auto mb-5'>
        {data.map((element,index) => (
          <div key={index} className='min-w-[17%] h-full bg-zinc-900 shadow-lg hover:scale-105 flex flex-col gap-2 mt-3 rounded overflow-hidden'>
            <img className='h-1/2 w-full object-cover object-center' src={`https://image.tmdb.org/t/p/original/${element.backdrop_path || element.poster_path}`} alt="" />
            <h3 className='text-zinc-400 px-2 h-[20%] leading-[1.25]'>{element.title || element.name || element.original_title || element.original_name}</h3>
            <p className='text-zinc-600 text-sm leading-[1.25] px-2'>{element.overview.slice(0,65)}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Cards