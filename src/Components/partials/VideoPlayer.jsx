import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


const VideoPlayer = () => {
  const {pathname} = useLocation();  
  const media_type = pathname.includes('movie') ? 'movie' : 'tv';
  const video = useSelector(state => state[media_type].info.videos);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);

  const navigateBack = () => {
    navigate(-1);
  }
  
  return (
    <div className="absolute h-[100vh] w-full top-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center">
      <i onClick={navigateBack} className="ri-close-large-line top-[5%] text-zinc-200 right-[5%] absolute cursor-pointer z-[999] text-xl"></i>
        <div className="w-[100vw] h-[100vh] mobile:h-[50vh] mobile:w-[80vw]">
          <ReactPlayer controls height="100%" width="100%" url={`https://www.youtube.com/watch?v=${video.key}`} />
        </div>
    </div>
  )
}


export default VideoPlayer