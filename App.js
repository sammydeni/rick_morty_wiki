import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './src/containers/List';
import CharacterDetailsScreen from './src/containers/CharacterDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen}/>
    </Stack.Navigator>
      }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
