//React
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
//Dimensions
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


const HomePageHeader = ({userData, LogoPicture, handleLogoPress}) => {

    return(

        <View style={styles.homePageHeaderContainer}>

            <TouchableOpacity onPress={handleLogoPress}>
                <Image source={LogoPicture} style={{resizeMode: 'contain', width: 50, height: 50, left: 5}} />
            </TouchableOpacity>

            
            <Text style={styles.mainText}>GUST</Text>
            <Text style={styles.welcome}>Hi {userData.firstName}</Text>
            
        </View>

    )
}

export default HomePageHeader;

const styles = StyleSheet.create({
    homePageHeaderContainer: {
        flexDirection: 'row',
        top: -220,
        // left: -50,
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10, 
        // position: 'absolute'
    },
    mainText: {
        color: '#2FA8F8',
        fontSize: 50,
        alignSelf: 'center'
    },
    mainTextContainer: {
        margin: 5
    },
    welcome: {
        color: '#2FA8F8',
        fontSize: 14,
        right: 5
    },
    modal: {
        marginTop: 22,
        flex: 1,
        margin: 10,
        width: width * 0.7,
        height: height * 0.9,
    }
})
