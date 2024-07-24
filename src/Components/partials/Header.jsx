import React, { useState } from 'react';

const Header = ({ data }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return data ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className='w-full h-[70vh] flex flex-col rounded-2xl gap-4 justify-end p-10'
    >
      <h1 className='text-zinc-300 font-black text-3xl'>
        {data.title || data.name || data.original_name || data.original_title}
      </h1>
      <p className='text-zinc-500 w-1/2 font-semibold'>
        {showFullText ? data.overview : data.overview.slice(0, 200)}
        {data.overview.length > 200 && (
          <button onClick={toggleFullText} className='text-blue-400 ml-2'>
            {showFullText ? '...less' : '...more'}
          </button>
        )}
      </p>
      <div className='font-black flex gap-10'>
        {data.release_date && (
          <i class="ri-calendar-fill text-yellow-500">
            <h1 className='text-zinc-500'>{data.release_date}</h1>
          </i>
        )}
      <i class="ri-movie-2-fill text-yellow-500 capitalize">
        <h1 className='text-zinc-500'>{data.media_type}</h1>
      </i>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Header;
