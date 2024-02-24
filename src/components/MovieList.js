import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default Logo = () => {
    return (
        <View style={styles.headingContainer}>
            <Text  style={styles.headingText}>Movie List</Text>
            <View style={styles.headerLogo}>
                <FontAwesome name="user" size={38} color="#ffffff" />
                <FontAwesome name="heart" size={38} color="#ffffff" />
            </View>
        </View>
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
        marginRight: 150,
    },
    headerLogo:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    
})
