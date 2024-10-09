import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './(screens)/Home';
import LoginScreen from './(screens)/Login';
import CameraScreen from './(screens)/Camera';
import DatabaseScreen from './(screens)/Database';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator  initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="Camera" component={CameraScreen} options={{
          headerTitleAlign: 'center',headerShown: false
        }}/>
        <Stack.Screen name="Database" component={DatabaseScreen} options={{
          headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
