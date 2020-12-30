import CreateDataContext from './CreateDataContext'
import Tracker from '../api/Tracker'
import { AsyncStorage } from 'react-native'
import {navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return { ...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
  };

const tryLocalSignIn = dispatch => {
    return async() => {
        const token = await AsyncStorage.getItem('token')
        if(token){
            dispatch({type: 'signin', payload: token})
            navigate('TrackList')
        }
    }
}

const signup = (dispatch) => {
    return async({email, password}) => {
        try {
            const response = await Tracker.post('/signup', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('TrackList')
        } catch (err) {
            console.log(err)
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }   
    }
}

const signin = (dispatch) => {
    return async({email, password}) => {
        try {
            const response = await Tracker.post('/signin', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('TrackList')
        } catch (error) {
            console.log(error)
            dispatch({type: 'add_error', payload: 'Something went wrong with sign in'})
        }
    }
}


const signout = (dispatch) => {
    return null
}

export const { Provider, Context } = CreateDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignIn},
    { token: null, errorMessage: '' }
)