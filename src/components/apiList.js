import React, {useEffect, useState} from "react"
import { Image } from "react-native";
import { ActivityIndicator, Text, View, FlatList, StyleSheet} from 'react-native';

const MainScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=5c753bc3b9447955cdbff43899960670');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View>
      {isLoading ? (<ActivityIndicator />) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.movieContainer}>
              <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={styles.movieImage} />
              <View>
                <Text style={styles.movieTitle}>
                  {item.title}
                </Text>
                <Text style={styles.movieDes}>
                  Popularity: {item.popularity}{'\n'} Vote count: {item.vote_count}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer:{
    flex: 1,
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    marginTop: 1,
    backgroundColor: 'lightgrey'
  },
  movieTitle:{
    marginTop: 10,
    height: 30,
    fontSize: 25,
    fontWeight: 'bold'
  },
  movieDes:{
    marginTop: 10,
    height: 50,
    fontSize: 16,
    fontWeight: '500',
  },
  movieImage:{
    height: 100,
    width: 70,
    margin: 8
  }
})

export default MainScreen;