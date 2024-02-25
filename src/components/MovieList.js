import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
            <View style={styles.languageBtn}>
                    <TouchableOpacity>
                        <Text style={styles.languagetxt}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.languagetxt}>Hindi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.languagetxt}>Tamil</Text>
                    </TouchableOpacity>
            </View>
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
    },
    languageBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'space-evenly',
        height: 60
    },
    languagetxt:{
        margin: 2,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        height: 40,
        width: 100,
        borderRadius: 5,
        paddingLeft: 30
    }
})
