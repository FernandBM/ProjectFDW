import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './(screens)/Home';
import LoginScreen from './(screens)/Login';
import CameraScreen from './(screens)/Camera';
import DatabaseScreen from './(screens)/Database';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Camera" component={CameraScreen}/>
        <Stack.Screen name="Database" component={DatabaseScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
