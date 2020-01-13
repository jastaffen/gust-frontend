//React
import React from 'react';
import { Modal, View, SafeAreaView, FlatList, Text, TouchableHighlight, ImageBackground, Dimensions, StyleSheet, Image } from 'react-native';
//imports
const width = Dimensions.get('window').width;

const CloseIcon = require('../../images/closemodal.png');

const Item = ({name, images, id, handleSelection, artist}) => {

    return(

        <TouchableHighlight style={styles.items} onPress={() => handleSelection(artist)}>
            <ImageBackground source={images[0]} style={{width: width * 0.95, height: 100, opacity: 0.9, justifyContent: 'center'}}>
                <Text style={styles.itemText}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
        
    )
}

const DidYouMeanModal = ({artists, closeModal, handleSelection}) => {
    return(
        <Modal animationType='slide' >

            <View style={styles.modal}>

                <TouchableHighlight onPress={closeModal} style={{top: -40, position: 'absolute', left: 5, borderWidth: 1, alignItems: 'center', padding: 3, borderRadius: 10, backgroundColor: '#2FA8F8'}}>
                    <Image source={CloseIcon} style={{resizeMode: 'contain', width: 30, height: 30}} />
                </TouchableHighlight>
                
                <Text style={styles.didYouMean} >DID YOU MEAN:</Text>

                <SafeAreaView maximumZoomScale={width * 1.2} >
                    
                    <FlatList data={artists} renderItem={({item}) => <Item artist={item} id={item.id} name={item.name} images={item.images} handleSelection={handleSelection} />} keyExtractor={item => item.id} />

                </SafeAreaView>

            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        top: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    didYouMean: {
        color: '#2FA8F8',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    items: {
        borderWidth: 2,
    },
    itemText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})

export default DidYouMeanModal;

