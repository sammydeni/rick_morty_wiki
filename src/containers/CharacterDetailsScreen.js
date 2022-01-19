import React from "react";
import { View, Text, Image, StyleSheet, } from "react-native";
const CharacterDetailsScreen = ({ route, navigation }) => {
    const { characterName, characterImg, characterStatus, characterSpecies, characterGender, characterOrigin } = route.params;
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
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Gender</Text>
                    <Text style={styles.infoText}>{characterGender}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Origin</Text>
                    <Text style={styles.infoText}>{characterOrigin}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 20,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        
    },
    info: {
        flexBasis: '50%'
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