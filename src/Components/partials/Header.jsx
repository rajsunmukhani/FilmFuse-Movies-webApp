import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      className='w-full min-h-[60vh] flex flex-col rounded-2xl gap-4 justify-end p-10'
    >
      <h1 className='text-zinc-300 font-black text-3xl'>
        {data.title || data.name || data.original_name || data.original_title}
      </h1>
      <p className='text-zinc-400 w-1/2 font-semibold'>
        {showFullText ? data.overview : data.overview.slice(0, 200)}
        {data.overview.length > 200 && (
          <button onClick={toggleFullText} className='text-blue-400 ml-2'>
            {showFullText ? '...less' : '...more'}
          </button>
        )}
      </p>
      <div className='font-black flex gap-10'>
        {data.release_date && (
          <i className="ri-calendar-fill text-yellow-500">
            <h1 className='text-zinc-500'>{data.release_date}</h1>
          </i>
        )}
      <i className="ri-movie-2-fill text-yellow-500 capitalize">
        <h1 className='text-zinc-500'>{data.media_type}</h1>
      </i>
      </div>
      <Link className='bg-[#6556CD] w-fit p-3 py-2 rounded text-white font-semibold'>Watch Trailer</Link>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Header;
