import React, {useState, useContext} from "react";
import {Text, View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
// import MovieDetails from "./movieDetails";
import {PracticeContext, PracticeProvider} from './Context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HelpCenter() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>-:Feel free to reach out:-</Text>
      <Text style={styles.headingTxt}>Nikhil & Durga</Text>
      
      <Text style={styles.headingTxt}>Contact Details</Text>
      <View style={styles.contactContainer}>
        <View style={styles.singleElement}>
            <Image source={require('./images/profileLogo.png')} style={styles.img}></Image>
            <Text style={styles.headingTxt}>Nikhil Kumar</Text>
            <Text style={styles.discTxt}>Ph: 7808627025</Text>
            <Text style={styles.discTxt}>Linkdin</Text>
        </View>
        <View style={styles.singleElement}>
            <Image source={require('./images/profileLogo.png')} style={styles.img}></Image>
            <Text style={styles.headingTxt}>Durga Prasad</Text>
            <Text style={styles.discTxt}>Ph: 9390477302</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height:windowHeight,
        width: windowWidth,
        backgroundColor: '#ffffff' ,
        alignItems: 'center',

    },
    headingTxt: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10
    },
    img:{
        margin: 15,
        height: 100,
        width: 100,
        borderRadius: 200
    },
    discTxt:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    contactContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    singleElement:{
        marginLeft: 20,
        alignItems: 'center',
    }
})