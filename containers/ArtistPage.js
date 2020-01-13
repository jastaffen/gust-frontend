//React
import React, {useState, useEffect} from 'react';
import { Dimensions, View, Text, ScrollView, ImageBackground, Flatlist } from 'react-native';
//Imports
import * as requests from '../requests';
const width = Dimensions.get('window').width;

const ArtistPage = ({artist, spotifyToken, country}) => {

    const [albums, setAlbums] = useState([])    

    useEffect(() => {
        requests.fetchArtistAlbums(spotifyToken, artist.id, country)
        .then(obj => setAlbums(obj.items));
    }, [])


    return(

        <ScrollView vertical style={{position: 'absolute', zIndex: 9, top: -130}}>
            <ImageBackground source={artist.images[0]} style={{width: width, height: 400, resizeMode: 'contain'}}>
                <Text>{artist.name}</Text>
            </ImageBackground>
        </ScrollView>
    )
}

export default ArtistPage;