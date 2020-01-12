//React
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
//Imports
const LogoPicture = require('./images/gustlogo.jpg');
import * as requests from './requests'
//Components
import LoginSignUpContainer from './containers/LoginSignUpContainer';

export default function App() {

  const [newUser, setNewUser] = useState(null)

  const setUserInfo = (user, city, country) => {
    requests.signUp(user,city, country)
    .then(obj => setNewUser({
      firstName: obj.user.firstName,
      lastName: obj.user.lastName,
      username: obj.user.username,
      city: obj.user.city,
      country: obj.user.country,
      jwt: obj.jwt
    }))
  }

  console.log(newUser)
  return (
    <View style={styles.container}>
      <LoginSignUpContainer setUserInfo={setUserInfo} LogoPicture={LogoPicture} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
