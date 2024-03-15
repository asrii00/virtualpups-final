import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Home from './screens/Home';
import DogPage from './screens/DogPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

 
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        >
         <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
         <Stack.Screen name="DogPage" component = {DogPage} options={{ title: 'Meet...' }} />
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
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
