import React, { useEffect } from 'react'
import { asyncLoadMovie, removeMovie } from '../Store/actions/MovieActions'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading'

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
  },[])
  return info ? (
    <div style={{background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,backgroundSize: 'cover',backgroundPosition: 'top'}} className='w-full h-screen'>

      <nav className='w-1/2 p-8 flex items-center justify-evenly font-bold text-xl text-zinc-100'>
        <i onClick={navigateBack} className="ri-arrow-left-line cursor-pointer text-xl"></i>
        <a href={info.details.homepage}><i className="ri-external-link-line"></i></a> 
        <a href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}><i className="ri-global-line"></i></a>
        <a href={`https://www.imdb.com/title/${info.externalids.imdb_id}/`}>imdb</a>
      </nav>
      
      <div className="content flex items-center h-[80vh] pt-5">
        <div className="content-left w-1/2 h-full flex justify-center">
          <img src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path ||
            info.details.backdrop_path
            }`}
            className='w-1/2 h-3/4 object-cover rounded-xl'
              alt=""
          />                  
        </div>
        <div className="content-right w-1/2 h-full">
          <h1 className='font-black text-5xl text-zinc-200'>{info.details.original_title} <small className='text-zinc-400 text-lg'>({info.details.release_date.split('-')[0]})</small> </h1>
        </div>
      </div>

     {info.watchProviders != undefined && (
        <footer className='flex justify-between w-full px-16'>
              { 
                info.watchProviders.buy &&
                info.watchProviders.buy.map((provider) => {
                  return (
                  <div className='flex gap-5'>
                  <h4 className='text-zinc-200 text-xl'>Buy on:</h4>
                    <img key={provider.provider_id} className='h-8 w-8 rounded-full object-cover' src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                  </div>
                  )
                })
              }
          {
            info.watchProviders.flatrate &&
            info.watchProviders.flatrate.map((provider) => {
                return (
                  <div className='flex gap-5'>
                    <h4 className='text-zinc-200 text-xl'>Available on :</h4>
                    <img key={provider.provider_id} className='h-8 w-8 rounded-full object-cover' src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                  </div>
                )
              })
            }
              {
                info.watchProviders.rent &&
                info.watchProviders.rent.map((provider) => {
                  return (
                    <div className='flex gap-5'>
                      <h4 className='text-zinc-200 text-xl'>Get it on Rent :</h4>
                      <img key={provider.provider_id} className='h-8 w-8 rounded-full object-cover' src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} alt="" />
                    </div>
                    )
                  })
                }
        </footer>
      )}

     </div>
  ) : <Loading />
}

export default MovieDetails