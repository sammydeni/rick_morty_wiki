import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList, View, Text, Image, StyleSheet,  } from "react-native";

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [extraData, setExtraData] = useState(false);

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

  const renderItem = useCallback(({ item }) => {
    return (
        <TouchableOpacity
        onPress = { () => {}}>
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        
        <Text>{item.name}</Text>
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
    <FlatList
      data={characters}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={extraData}
      
      contentContainerStyle={styles.flatListContainer}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
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
    paddingVertical: 40,
  },
});

export default List;