//React
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//Components
import EditProfile from '../components/screens/EditProfile';
import Logout from '../components/screens/Logout';


const width = Dimensions.get('window').width;

const DrawerConfig = {
    flex: 1,
    drawerWidth: width * 0.83,
    zIndex: 9, 
    position: 'absolute',
    top: 0,
    start: 'left'
}

const DrawerNavigator = createDrawerNavigator(
    {
        Edit: {
            screen: EditProfile
        },
        Logout: {
            screen: Logout
        }
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);