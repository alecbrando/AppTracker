import React, { useContext } from 'react'
import { View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext'



const SignInScreen = ({navigation}) =>  {
    const {state, signin } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <AuthForm headerText="Sign In to Your Account" errorMessage={state.errorMessage} titleText="Sign In" onSubmit={signin} />
            <NavLink text="Don't have an account? Sign up instead" routeName="SignUp"/>
        </View>
    )
}

SignInScreen.navigationOptions = () => {
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

export default SignInScreen

