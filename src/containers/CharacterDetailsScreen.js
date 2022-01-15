import React from "react";
import { View, Text, Image, StyleSheet,  } from "react-native";
const CharacterDetailsScreen = ( { route, navigation }) => {
    const { characterName, characterImg } = route.params;
    return (
        <View style={styles.detailBox}>
<Text style= { styles.chName}>{characterName} </Text>
<Image source={{ uri: characterImg }} style={styles.chImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //   height: 70,
    //   flexDirection: 'row',
    //   backgroundColor: 'white',
    //   paddingHorizontal: 16,
    //   alignItems: 'center',
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 4,
    //   },
    //   shadowOpacity: 0.32,
    //   shadowRadius: 5.46,
    //   elevation: 9,
    // },
    detailBox: {
backgroundColor: 'white',
height: '100%',
flexDirection: 'column'
    },
    chName: {
textAlign: "center",
fontSize: 30
    },
    chImage: {
      width: 200,
      height: 200,
      marginTop: 20,
      borderRadius: 50,
      alignSelf: 'center'
    },
  });

export default CharacterDetailsScreen;