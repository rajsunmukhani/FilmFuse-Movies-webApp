export {removeMovie} from '../reducers/MovieSlice'
import axios from '../../utils/axios'
import {loadMovie} from '../reducers/MovieSlice'

export const asyncLoadMovie = (id) => async(dispatch,getState) => {
    try {
    const details = await axios.get(`/movie/${id}`);
    const externalids = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);

    const theData = {
        details: details.data,
        externalids: externalids.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(vid => vid.type === 'Trailer'),
        watchProviders: watchProviders.data.results.IN
    }
    dispatch(loadMovie(theData));
    } catch (error) {
        console.log('Error : ' , error);        
    }   
}