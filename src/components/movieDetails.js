import React from "react";
import {StyleSheet, Image, Text, View } from "react-native";

function MovieDetails({ route, navigation }) {
  const {item} = route.params;
    // const { itemId } = route.params;
    // const { otherParam } = route.params;
    return (
    <View style={styles.container}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,}}
        style={styles.movieImage}
      />
        <View style={styles.txtContainer}>
        {/* <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
                <Text style={styles.titletxt} >{item.title}</Text>
                <Text style={styles.resttxt}>Language: {item.original_language}</Text>
                <Text style={styles.resttxt}>Release Date: {item.release_date}</Text>
                <Text style={styles.resttxt}>Overview: {item.overview}</Text>
                <Text style={styles.resttxt}>Popularity: {item.popularity}</Text>
                <Text style={styles.resttxt}>Vote Count: {item.vote_Count}</Text>
        </View>

    </View>
    );
  }
  const styles = StyleSheet.create({
    container:{
      margin: 5,
      marginTop: 5
    },
    movieImage: {
      height: 150,
      width: 'auto',
      marginTop: 2
    },
    txtContainer:{
      backgroundColor: '#ffffff',
      elevation: 5,
      margin: 5,
      padding: 10
    },
    titletxt:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    resttxt:{
      fontSize: 16,
      fontWeight: '500',
      margin: 2
    }
  })
export default MovieDetails;