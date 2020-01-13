//React
import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';

//Imports
import SearchIcon from '../../images/search.png';

const SearchArtists = ({searchText, handleSearchText, submitSearch}) => {

    return(

        <View style={{justifyContent: 'center', alignItems: 'center'}}>

            <View style={styles.formContainer} >

                <Image source={SearchIcon} style={styles.ImageStyle} />
                <TextInput autoCapitalize='words' style={styles.input} placeholder="search for an artist:" value={searchText} onChangeText={handleSearchText} />
                
            </View>

            <TouchableHighlight onPress={submitSearch}>
                    <Text style={{color: '#2FA8F8', fontSize: 16, fontWeight: 'bold', borderWidth: 1, borderColor: '#2FA8F8', padding: 8, borderRadius: 10}}>Search it Up!</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        top: -60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#2FA8F8',
        height: 40,
        margin: 10,
        width: 260,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
        color: '#2FA8F8'
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
})


export default SearchArtists;