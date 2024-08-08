export {removePerson} from '../reducers/PersonSlice'
import axios from '../../utils/axios'
import {loadPerson} from '../reducers/PersonSlice'

export const asyncLoadPerson = (id) => async(dispatch,getState) => {
    try {
    const details = await axios.get(`/person/${id}`);
    const externalids = await axios.get(`/person/${id}/external_ids`);

    const theData = {
        details: details.data,
        externalids: externalids.data,
    }
    dispatch(loadPerson(theData));
    } catch (error) {
        console.log('Error : ' , error);        
    }   
}