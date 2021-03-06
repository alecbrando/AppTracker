import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetail from './src/screens/TrackDetail';
import TrackList from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import {Provider as LocationProvider} from './src/context/LocationContext'
import {Provider as TrackProvider} from './src/context/TrackContext'
 const switchNavigator = createSwitchNavigator({
   Resolve: ResolveAuthScreen,
   loginFlow: createStackNavigator({
     SignUp: SignUpScreen,
     SignIn: SignInScreen
   }),
   mainFlow: createBottomTabNavigator({
     Track: createStackNavigator({
       TrackList: TrackList,
       TrackDetail: TrackDetail
     }),
     Create: TrackCreateScreen,
     Account: AccountScreen
   })
 })

 const App = createAppContainer(switchNavigator)


 export default () => {
   return (
     <TrackProvider>
     <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => {setNavigator(navigator)}}/>
      </AuthProvider>
     </LocationProvider>
     </TrackProvider>
   )
 }
