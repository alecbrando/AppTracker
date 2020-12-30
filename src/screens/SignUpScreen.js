import React, {useState, useContext} from 'react'
import { View, StyleSheet,  } from 'react-native';
import {Text} from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'

const SignUpScreen = ({ navigation }) =>  {
    const {state, signup} = useContext(AuthContext)
    

    return <View style={styles.container}>
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

