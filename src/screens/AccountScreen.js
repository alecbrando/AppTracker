import React, {useContext} from 'react'
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';



const AccountScreen = () =>  {
    const {signout} = useContext(AuthContext)
    
    return (
    <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
        <Text style={{fontSize: 48}}>Account Screen</Text>
        <Spacer/>
        <Spacer/>
        <Spacer/>
        <Spacer>
            <Button title="Sign Out" onPress={signout}/>
        </Spacer>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
    }
})

export default AccountScreen

