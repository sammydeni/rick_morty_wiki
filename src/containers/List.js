import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList, View, Text, Image, StyleSheet, } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const List = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [extraData, setExtraData] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const characters = await result.json();
      return characters.results;
    }

    getCharacters().then(setCharacters);
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

const searchFilter = (text) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${text}`;
  const getFilteredCharacter = async () => {
    const result = await fetch(url);
    const Filteredcharacters = await result.json();
    return Filteredcharacters.results;
  }
  getFilteredCharacter().then(setCharacters);
  setSearch(text);
}

  const renderItem = useCallback(({ item }) => {
    return (


      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CharacterDetails', {
            characterName: item.name,
            characterImg: item.image,
            characterStatus: item.status,
            characterSpecies: item.species,
            characterGender: item.gender,
            characterOrigin: item.origin.name
          });
        }
        }>
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <Text style={{color: '#DAD2D8'}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  const keyExtractor = useCallback((item, index) => {
    return `${item.id}`;
  }, []);

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{ height: 16 }} />
  }, []);

  return (
    <View style={{ marginTop: 50,backgroundColor: '#2C5263', paddingTop:20, flex: 1 }}>
      <TextInput
        style={styles.searchBar}
        value={search}
        placeholder="Search a Character"
        placeholderTextColor='#DAD2D8'
        underlineColorAndroid="transparent"
        onChangeText={(text) => searchFilter(text)}
      ></TextInput>
      
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={extraData}

        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#0F8B8D',
    borderRadius: 4,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 0,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
    marginRight: 20,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchBar: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#0F8B8D',
  }
});

export default List;