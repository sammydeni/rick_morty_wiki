import React from "react";
import { View, Text, Image, StyleSheet, } from "react-native";
const CharacterDetailsScreen = ({ route, navigation }) => {
    const { characterName, characterImg, characterStatus, characterSpecies } = route.params;
    return (
        <View style={styles.detailBox}>
            <Text style={styles.chName}>{characterName} </Text>
            <Image source={{ uri: characterImg }} style={styles.chImage} />
            <View style={styles.infoBox}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Status</Text>
                    <Text style={styles.infoText}>{characterStatus}</Text>

                </View>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Species</Text>
                    <Text style={styles.infoText}>{characterSpecies}</Text>
                </View>
            </View>
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
        flexDirection: 'column',
    },
    chName: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: 'sans-serif-medium'

    },
    chImage: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 50,
        alignSelf: 'center'
    },
    infoBox: {
        flexDirection: 'row',
        marginTop: 20,
    },
    info: {
        width: '50%',
    },
    infoTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'monospace'

    },
    infoText: {
        textAlign: 'center',
        fontFamily: 'monospace'


    }
});

export default CharacterDetailsScreen;