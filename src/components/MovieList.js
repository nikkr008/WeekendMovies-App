import React from 'react'
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainScreen from './apiList';
import MovieDetails from './movieDetails';

export default Logo = () => {
    return (
        <SafeAreaView>
            <View style={styles.headingContainer}>
                <Text  style={styles.headingText}>Movie List</Text>
                <View style={styles.headerLogo}>
                    <FontAwesome name="user" size={38} color="#ffffff" paddingRight={20}/>
                    <FontAwesome name="heart" size={38} color="#ffffff" paddingRight={0}/>
                </View>
            </View>
            <MainScreen/>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    headingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10
    },
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 120,
    },
    headerLogo:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
    }
})
