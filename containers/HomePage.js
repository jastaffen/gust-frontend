//React
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
//Components
import HomePageHeader from '../components/homepage/HomePageHeader';
import SearchArtists from '../components/homepage/SearchArtists';
import DidYouMeanModal from '../components/homepage/DidYouMeanModal';
import ArtistPage from './ArtistPage';
//imports
import * as requests from '../requests';


const HomePage = ({userData, LogoPicture, getSpotifyToken}) => {
    
    const [isLogoPressed, setLogoPress] = useState(false);
    const [spotifyToken, setSpotifyToken] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [artists, setArtists] = useState(null);
    const [selectedArtist, setSelectedArtist] = useState(null);


    const handleLogoPress = () => {
        setLogoPress(!isLogoPressed)
    }

    const handleSearchText = (text) => {
        setSearchText(text)
    }

    const submitSearch = () => {
        if (!searchText) {
            Alert.alert("You haven't searched for an artist! Search for an artist in the form above.")
        } else {

            let formattedName = searchText.toLowerCase().replace(/\s/g, '+');
            requests.fetchArtists(spotifyToken, formattedName)
            .then(obj => {
                if (obj.artists.items.length === 0) {
                    Alert.alert('Sorry no artists were found by that name')
                } else {
                    setArtists(obj.artists.items)
                }
            })
        }
        
    }

    const handleSelection = artist => {
        setSelectedArtist(artist);
        setArtists(null);
        setSearchText(null);
    }

    const closeModal = () => {
        setArtists(null);
        setSearchText(null);
    }

    const conditionalRenderOfArtists = () => {
        if (artists && artists.length > 1) {
            return(<DidYouMeanModal artists={artists} closeModal={closeModal} handleSelection={handleSelection}  /> )
        } else if (artists && artists.length === 1) {
            handleSelection(artists[0])
        } else {
            return(<SearchArtists searchText={searchText} handleSearchText={handleSearchText} submitSearch={submitSearch} />)
        }
    }

    useEffect(() => {
        requests.getSpotifyToken()
        .then(token => setSpotifyToken(token.access_token))
    }, [])

    return(

    <View>

        {/* { isLogoPressed ? <DrawerNavigator /> : null } */}

        <HomePageHeader userData={userData} LogoPicture={LogoPicture} handleLogoPress={handleLogoPress} />

        {selectedArtist ? <ArtistPage artist={selectedArtist} spotifyToken={spotifyToken} country={userData.country} /> : conditionalRenderOfArtists()}

    </View>

    )
}

export default HomePage;

