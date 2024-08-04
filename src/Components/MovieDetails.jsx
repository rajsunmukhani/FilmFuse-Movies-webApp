import React, { useEffect } from 'react'
import { asyncLoadMovie, removeMovie } from '../Store/actions/MovieActions'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading'
import Cards from './partials/Cards';

const MovieDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {info} = useSelector(state => state.movie);
  console.log(info);

  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1);
  }
  
  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return() => {
      dispatch(removeMovie());
    }
  },[id])
  return info ? (
    <div style={{background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,backgroundSize: 'cover',backgroundPosition: 'top'}} className='w-full min-h-[160vh]'>

      <nav className='w-1/2 p-8 flex items-center justify-evenly font-bold text-xl text-zinc-100'>
        <i onClick={navigateBack} className="ri-arrow-left-line cursor-pointer text-xl"></i>
        <a href={info.details.homepage}><i className="ri-external-link-line"></i></a> 
        <a href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}><i className="ri-global-line"></i></a>
        <a href={`https://www.imdb.com/title/${info.externalids.imdb_id}/`}>imdb</a>
      </nav>
      
      <div className="content flex items-center h-[80vh] text-zinc-200 pt-5">
        <div className="content-left w-1/2 h-full flex justify-center items-center">
          <img src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path ||
            info.details.backdrop_path
            }`}
            className='w-1/2 h-3/4 object-cover rounded-xl'
              alt=""
          />                  
        </div>
        <div className="content-right w-1/2 h-full flex flex-col justify-evenly">

            <div>
              <h1 className='font-black text-5xl w-[80%]'>{info.details.original_title} <small className='text-zinc-400 text-lg'>({info.details.release_date.split('-')[0]})</small></h1>
              
              <h3 className='w-[80%] text-center font-black'>{info.details.tagline}</h3>
            </div>

            <h3 className='text-zinc-300 font-black'>Release Date : {info.details.release_date} </h3>

            <h2 className='text-xl font-black'>In this you get :
              <p className='font-semibold text-lg'>
                {info.details.genres.map(g => g.name).join(', ')}
              </p>
            </h2>

            <h4 className='w-[80%]'>
              <p className='font-black text-2xl'>Overview : </p>
              {info.details.overview}
            </h4>

          
          {info.details.vote_average > 0 && (
            <h4 className='flex gap-3 text-2xl'>Public Ratings : {
                info.details.vote_average >= 6 ? (
                  <span className='flex items-center text-xl gap-2 text-green-500'>
                    {info.details.vote_average.toFixed(2)}
                    <i className="ri-thumb-up-fill"></i>
                  </span>
                ) : (
                  <span className='flex items-center text-xl gap-2 text-red-500'>
                    {info.details.vote_average.toFixed(2)}
                    <i className='ri-thumb-down-fill'></i>
                  </span>
                )
              }
            </h4>
          )}

            <Link className='bg-[#6556CD] p-3 rounded text-white hover:scale-105 w-fit font-black'>
            Watch Trailer
            </Link>
            
        </div>
      </div>

     {info.watchProviders != undefined && (
        <footer className='flex justify-evenly w-full px-16'>
              { 
                info.watchProviders.buy && (
                  <div className='flex gap-5'>
                    <h4 className='text-zinc-200 text-xl'>Buy on:</h4>
                    {info.watchProviders.buy.map((provider) => {
                        return (
                          <img key={provider.provider_id} className='h-8 w-8 rounded-full object-cover' src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                        )
                    })}
                  </div>)
              }
          {
            info.watchProviders.flatrate &&
                  <div className='flex gap-5'>
                    <h4 className='text-zinc-200 text-xl'>Available on :</h4>
            {info.watchProviders.flatrate.map((provider) => {
                return (
                    <img key={provider.provider_id} className='h-8 w-8 rounded-full object-cover' src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                  )
                })}
                 </div>
            }
              {
                info.watchProviders.rent &&
                    <div className='flex gap-5'>
                      <h4 className='text-zinc-200 text-xl'>Get it on Rent :</h4>
                {info.watchProviders.rent.map((provider) => {
                  return (
                      <img key={provider.provider_id} className='h-8 w-8 rounded-full object-cover' src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                    )
                  })}
                  </div>
                }
        </footer>
      )}

      <div className='px-16 mt-5 py-5 text-2xl font-black text-white'>
        <h1>Recommendations & Similars : </h1>
        <Cards data={info.recommendations || info.similar}/>
      </div>

     </div>
  ) : <Loading />
}

export default MovieDetails