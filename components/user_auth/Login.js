//React
import React, {useState} from 'react';
import { View, TextInput, TouchableHighlight, Text, Alert, Image } from 'react-native';


const Login = ({inputStyle, getUser, LogoPicture}) => {
    
    const [user, setUser] = useState({
        username: null,
        password: null
    })

    const handleLoginSubmit = () => {
        if (user.username && user.password) {
            getUser(user)
        } else {
            Alert.alert('Something is blank...')
        }   
    }

    return(
    <>    
        <View style={{top: -290}}>

            <TextInput autoCapitalize='none' textContentType="username" style={inputStyle} placeholder="username" onChangeText={(e) => setUser({...user, username: e.trim()})} onSubmitEditing={handleLoginSubmit} />
            <TextInput autoCapitalize='none' secureTextEntry={true} style={inputStyle} placeholder="password" onChangeText={(e) => setUser({...user, password: e.trim()})} onSubmitEditing={handleLoginSubmit} />

            {/* <TouchableHighlight style={{alignSelf: 'center', margin: 2}} onPress={handleLoginSubmit}>
                <Text style={{color: '#3C65D7', fontSize: 15}}>Submit</Text>
            </TouchableHighlight> */}

        </View>

        <View style={{position: 'absolute', top: -180, alignSelf: 'center'}}>
            <Image source={LogoPicture} style={{resizeMode: 'contain', width: 180, height: 180}} />
        </View>

    </>
    )
}


export default Login