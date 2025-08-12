import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/components/WelcomeScreen';
import HomeScreen from './src/screen/HomeScreen';
import GetStartedScreen from './src/screen/GetStartedScreen'; 
import GetMoredetails from './src/screen/GetMoredetails';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="GetStarted" component={GetStartedScreen} /> 
         <Stack.Screen  name="Moredetails"  component={GetMoredetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
