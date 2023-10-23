import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './private/HomeScreen';
import DetailFomation from './private/DetailFomation';

const Stack = createNativeStackNavigator();

const RouteExo = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detail" component={DetailFomation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteExo;
