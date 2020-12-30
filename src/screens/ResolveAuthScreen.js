import React, {useEffect, useContext} from 'react'
import { Context } from '../context/AuthContext'


const ResolveAuthScreen = () => {
    const {tryLocalSignIn } = useContext(Context)

    useEffect(() => {
        tryLocalSignIn()
    },[])

    return null
}

export default ResolveAuthScreen
