import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {Text, Button, Input} from'react-native-elements'
import Spacer from './Spacer'
const AuthForm = ({  headerText, errorMessage, onSubmit, titleText}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return <>
            <Spacer>
            <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer>
            <Input autoCapitalize="none" autoCorrect={false} label="Email" value={email} onChangeText={setEmail}/>
            </Spacer>
            <Spacer>
            <Input autoCapitalize="none" autoCorrect={false} label="Password" secureTextEntry value={password} onChangeText={setPassword}/>
            </Spacer>
            <Spacer>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Button title={titleText} onPress={() => onSubmit({email, password})}/>
            </Spacer>
        </>
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
})


export default AuthForm