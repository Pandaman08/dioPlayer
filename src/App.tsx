import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
    SafeAreaView, 
    SafeAreaProvider,
} from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';

export default function App (){
    return (
        <SafeAreaProvider>
            <HomeScreen />
        </SafeAreaProvider>
    )
}