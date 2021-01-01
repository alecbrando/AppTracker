import React, {useContext, useCallback} from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import {Text} from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
// import '../mockLocation'
import {Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) =>  {
    const {state, addLocation} = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, state.recording)
    }, [state.recording])
    const [err] = useLocation(isFocused || state.recording,callback)
    

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)

