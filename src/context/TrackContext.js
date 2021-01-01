import CreateDataContext from "./CreateDataContext";
import Tracker from '../api/Tracker'


const trackReducer = (state, action) => {
    switch(action.type){
        case 'fetch_tracks':
            return action.payload
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    const response = await Tracker.get('/tracks')
    dispatch({type: 'fetch_tracks', payload: response.data})
}

const createTrack = dispatch => async (name, locations) => {
    await Tracker.post('/tracks', {name, locations})
}


export const { Provider, Context} = CreateDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
)