import React, { useEffect } from 'react'
import { asyncLoadPerson, removePerson } from '../Store/actions/PersonActions'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading'

const PersonDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {info} = useSelector(state => state.person);

  console.log(info);
  
  

  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1);
  }
  
  useEffect(() => {
    dispatch(asyncLoadPerson(id));
    return() => {
      dispatch(removePerson());
    }
  },[id])


  return info ? (
    <div style={{background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${info.details.profile_path})`,backgroundSize: 'cover',backgroundPosition: 'top'}} className='movieDetails w-full relative min-h-[100vh] mobile:overflow-y-auto'>
      <nav className='w-1/2 p-8 flex items-center justify-evenly font-bold text-xl text-zinc-100 mobile:w-full mobile:justify-between'>
        <i onClick={navigateBack} className="ri-arrow-left-line cursor-pointer text-xl"></i>
        <a href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}><i className="ri-global-line"></i></a>
        <a href={`https://www.imdb.com/name/${info.externalids.imdb_id}/`}>imdb</a>
      </nav>
      
      <div className="content mobile:flex-col flex items-center h-[83vh] text-zinc-200 pt-5">
        <div className="content-left mobile:w-full w-1/2 h-full flex justify-center items-center">
          <img src={`https://image.tmdb.org/t/p/original/${
            info.details.profile_path
            }`}
            className='w-1/2 mobile:w-2/3 mobile:h-full h-3/4 object-cover rounded-xl'
              alt=""
          />                  
        </div>
        <div className="content-right mobile:gap-5 mobile:w-full mobile:text-center w-1/2 h-full flex flex-col justify-evenly">
            <h1 className='font-black text-5xl mobile:w-full mobile:text-2xl w-[80%]'>{info.details.name}</h1>

            <h3 className='text-zinc-300 mobile:text-zinc-400 font-black'>Birthday : {info.details.birthday} </h3>

            <h4 className='w-[80%] mobile:w-full mobile:p-5'>
              <p className='font-black text-2xl mb-5'>Biography : </p>
              {info.details.biography}
            </h4>
        </div>
      </div>

      <Outlet />

     </div>
  ) : <Loading />
}

export default PersonDetails