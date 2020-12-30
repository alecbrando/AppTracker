import React, { useContext} from 'react'
import { View, StyleSheet,  } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'
import {NavigationEvents} from 'react-navigation'

const SignUpScreen = ({ navigation }) =>  {
    const {state, signup, clearErrorMessage} = useContext(AuthContext)
    

    return <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm headerText="Sign Up for Tracker" errorMessage={state.errorMessage} titleText="Sign Up" onSubmit={signup}/>
            <NavLink routeName="SignIn" text="Already have an account? Sign in instead!"/>
            </View>
}

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginBottom: 200
    },
    
})

export default SignUpScreen

