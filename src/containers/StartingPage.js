import React from "react";
import { View, Text, Image, StyleSheet, } from "react-native";
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
  } from '@expo-google-fonts/outfit';
import { TouchableOpacity } from "react-native";

const StartingPage = ({ navigation}) => {
    let [fontsLoaded] = useFonts({
        Outfit_100Thin,
        Outfit_200ExtraLight,
        Outfit_300Light,
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_700Bold,
        Outfit_800ExtraBold,
        Outfit_900Black,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/start_page.png')} style={styles.mainImg}/>
            <Text style={styles.title}>Rick & Morty Wiki</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('List')}}>
                <Text style={styles.startBtn}>Show the Character List</Text>
            </TouchableOpacity>
        </View>
    )
      }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 40,
        backgroundColor: '#143642'
    },
    mainImg: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    title: {
        fontFamily: 'Outfit_500Medium',
        fontSize: 40, 
        paddingVertical: 6,
        textAlign: "center",
        color: '#EC9A29'


    },
    startBtn: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 16,
        fontFamily: 'Outfit_300Light',
        marginHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#0F8B8D",
        color: '#DAD2D8'
    }
});

export default StartingPage;