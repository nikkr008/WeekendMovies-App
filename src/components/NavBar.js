import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {View, StyleSheet, Image, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBar = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginRight: 80
        }}
      />
      <Pressable>
        <FontAwesome name="user" size={38} color="#ffffff" paddingRight={20}/>
      </Pressable>
      <Pressable>
        <FontAwesome name="heart" size={38} color="#ffffff" paddingRight={0}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NavBar;