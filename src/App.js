import React, { useState } from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from './components/MovieList';
import MovieDetails from './components/movieDetails';
import MainScreen from './components/apiList';

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='MainScreen'>
      <Stack.Screen name='MainScreen' component={MainScreen}></Stack.Screen>
      <Stack.Screen name='MovieDetails' component={MovieDetails}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
