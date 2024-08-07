export {removePerson} from '../reducers/PersonSlice'
import axios from '../../utils/axios'
import {loadPerson} from '../reducers/PersonSlice'

export const asyncLoadPerson = (id) => async(dispatch,getState) => {
    try {
    const details = await axios.get(`/person/${id}`);
    const externalids = await axios.get(`/person/${id}/external_ids`);
    const recommendations = await axios.get(`/person/${id}/recommendations`);
    const similar = await axios.get(`/person/${id}/similar`);
    const videos = await axios.get(`/person/${id}/videos`);
    const watchProviders = await axios.get(`/person/${id}/watch/providers`);

    const theData = {
        details: details.data,
        externalids: externalids.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(vid => vid.type === 'Trailer'),
        watchProviders: watchProviders.data.results.IN
    }
    dispatch(loadPerson(theData));
    } catch (error) {
        console.log('Error : ' , error);        
    }   
}