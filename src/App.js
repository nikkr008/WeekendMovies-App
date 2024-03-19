import React, { useState } from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from './components/MovieList';
import MovieDetails from './components/movieDetails';
import MainScreen from './components/apiList';
import NavBar from './components/NavBar';
import ProfileMenu from './components/ProfileMenu';
import Favourite from './components/Favourite';
const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='MainScreen'>
      <Stack.Screen 
        name='MainScreen' 
        component={MainScreen}
        options={{
          title: 'Movie List', //Set Header Title
          headerStyle: {
            backgroundColor: '#000000', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerRight: () => <NavBar/>,
      }}
      ></Stack.Screen>
      <Stack.Screen 
        name='MovieDetails' 
        component={MovieDetails}
        options={{
          title: 'Movie Details', //Set Header Title
          headerStyle: {
            backgroundColor: '#000000', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
          },
          headerRight: () => <NavBar/>,
        }}
      ></Stack.Screen>
      <Stack.Screen 
        name='ProfileMenu' 
        component={ProfileMenu}
        // options={{
        //   title: 'profile Menu', //Set Header Title
        //   headerStyle: {
        //     backgroundColor: '#000000', //Set Header color
        //   },
        //   headerTintColor: '#ffffff', //Set Header text color
        //   headerTitleStyle: {
        //   fontWeight: 'bold', //Set Header text style
        //   },
        //   headerRight: () => <NavBar/>,
        // }}
      ></Stack.Screen>
      <Stack.Screen 
        name='Favourite' 
        component={Favourite}
        // options={{
        //   title: 'profile Menu', //Set Header Title
        //   headerStyle: {
        //     backgroundColor: '#000000', //Set Header color
        //   },
        //   headerTintColor: '#ffffff', //Set Header text color
        //   headerTitleStyle: {
        //   fontWeight: 'bold', //Set Header text style
        //   },
        //   headerRight: () => <NavBar/>,
        // }}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({}); 

export default App;
