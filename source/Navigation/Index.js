import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Albums from '../Components/Albums';
import SharedAlbum from '../Components/SharedAlbum';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Albums' component={Albums} />
            <Stack.Screen name='Shared Album' component={SharedAlbum} />
        </Stack.Navigator>
    );
};

export default Navigator;