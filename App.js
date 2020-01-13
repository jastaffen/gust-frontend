//React
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, AsyncStorage, Text } from 'react-native';
//Imports
const LogoPicture = require('./images/gustlogo.jpg');
import * as requests from './requests'
//Components
import LoginSignUpContainer from './containers/LoginSignUpContainer';
import HomePage from './containers/HomePage';

export default function App() {

  const [userData, setUserData] = useState(null)

  const setUserInfo = (user, city, country) => {
    requests.signUp(user,city, country)
    .then(obj => {
      if (obj.error) {
        Alert.alert(obj.error)
      } else {
        Alert.alert(`${obj.user.firstName}! Your account has been successfully created!`)
        setUserData({
          firstName: obj.user.firstName,
          lastName: obj.user.lastName,
          username: obj.user.username,
          city: obj.user.city,
          country: obj.user.country,
          jwt: obj.jwt
        })
        // setToken(obj)
      }
    })
  }

  const getUser = (user) => {
    requests.login(user)
    .then(obj => {
      if (obj.error) {
        Alert.alert(obj.error)
      } else {
        setUserData({
          firstName: obj.user.firstName,
          lastName: obj.user.lastName,
          username: obj.user.username,
          city: obj.user.city,
          country: obj.user.country,
          jwt: obj.jwt
        })
        // setToken(obj); 
      }
    })
  }

  // const setToken = (data) => {
  //   AsyncStorage.setItem('userData', data)
  // }

  // const getToken = async () => {
  //   try {
  //     let data = await AsyncStorage.getItem("userData");
  //     return data
  //   } catch (error) {
  //     console.log("Something went wrong", error);
  //   }
  // }



  return (
    <View style={styles.container}>
      {!userData ? 
      <LoginSignUpContainer setUserInfo={setUserInfo} getUser={getUser} LogoPicture={LogoPicture} /> 
      : 
        <HomePage userData={userData} LogoPicture={LogoPicture} />
      }
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


