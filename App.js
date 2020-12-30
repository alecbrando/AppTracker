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


 const switchNavigator = createSwitchNavigator({
   loginFlow: createStackNavigator({
     SignUp: SignUpScreen,
     SignIn: SignInScreen
   }),
   mainFlow: createBottomTabNavigator({
     trackListFlow: createStackNavigator({
       TrackList: TrackList,
       TrackDetail: TrackDetail
     }),
     CreateTrack: TrackCreateScreen,
     Account: AccountScreen
   })
 })

 const App = createAppContainer(switchNavigator)


 export default () => {
   return (
     <AuthProvider>
       <App ref={(navigator) => {setNavigator(navigator)}}/>
     </AuthProvider>
   )
 }
