export {removeTv} from '../reducers/TvSlice'
import axios from '../../utils/axios'
import {loadTv} from '../reducers/TvSlice'

export const asyncLoadTv = (id) => async(dispatch,getState) => {
    try {
    const details = await axios.get(`/tv/${id}`);
    const externalids = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`);

    const theData = {
        details: details.data,
        externalids: externalids.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(vid => vid.type === 'Trailer'),
        watchProviders: watchProviders.data.results.IN
    }
    dispatch(loadTv(theData));
    } catch (error) {
        console.log('Error : ' , error);        
    }   
}