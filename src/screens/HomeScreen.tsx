import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';

export default function HomeScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Dio Player</Text>
            <Text style={styles.subtitle}>Bienvenido Audiofilo</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d0d0d'
    },
    title : {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    subtitle : {
        fontSize: 14,
        color: '#aaaa',
        marginTop: 8,   
    }
})
