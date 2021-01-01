import CreateDataContext from "./CreateDataContext";
import Tracker from '../api/Tracker'


const trackReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const fetchTracks = dispatch => () => {

}

const createTrack = dispatch => async (name, locations) => {
    await Tracker.post('/tracks', {name, locations})
}


export const { Provider, Context} = CreateDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
)