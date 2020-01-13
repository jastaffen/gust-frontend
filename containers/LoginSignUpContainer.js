//React
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
//Components
import Header from '../components/user_auth/Header'
import Login from '../components/user_auth/Login'
import SignUp from '../components/user_auth/SignUp'

const LoginSignUpContainer = ({getUser, setUserInfo, LogoPicture}) => {
    const initialButtonColor = '#2FA8F8';
    const focusedButtonColor = '#106AA1'

    const [signUp, setSignUp] = useState(false);
    const [signUpColor, setSignUpColor] = useState(initialButtonColor);
    const [loginColor, setLoginColor] = useState(focusedButtonColor)

    const handleSignUpPress = () => {
        setSignUp(true);
        setSignUpColor(focusedButtonColor);
        setLoginColor(initialButtonColor)
    }

    const handleLoginPress = () => {
        setSignUp(false);
        setSignUpColor(initialButtonColor);
        setLoginColor(focusedButtonColor);
    }

    return(
    <>
        <View style={styles.logoSignInContainer}>
            <Header />
        </View>

        <View>
            { signUp ? 
            
            <SignUp inputStyle={styles.input} setUserInfo={setUserInfo} LogoPicture={LogoPicture} /> : 

            <Login inputStyle={styles.input} getUser={getUser} LogoPicture={LogoPicture} /> }

            <View style={styles.buttonContainer}>

                <Button color={signUpColor} style={styles.button} onPress={handleSignUpPress} title="Sign Up!" />
        
                <Button color={loginColor} style={styles.button} onPress={handleLoginPress} title="Log In!" />
    
            </View>
          
        </View>

    </>
    )
}

export default LoginSignUpContainer;

const styles = StyleSheet.create({
    logoSignInContainer: {
        flex: 3,
        alignItems: 'center',
        top: 90
      },
      input: {
        backgroundColor: '#D8EEFC',
        color: '#6769F8',
        margin: 5,
        width: 220,
        height: 35,
        paddingHorizontal: 12,
        textAlign: 'center',
        fontSize: 16
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        alignContent: 'center',
        alignSelf: 'center',
        top: -280,
      },
      button: {
        position: 'relative',
        fontSize: 16,
      }
})