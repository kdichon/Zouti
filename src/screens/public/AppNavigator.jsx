// AppNavigator.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerList from './CustomerList';
import ImeiList from './ImeiList';
import CustomerUpdate from './CustomerUpdate'; // Composant pour la mise à jour des clients
import ImeiUpdate from './ImeiUpdate'; // Composant pour la mise à jour des numéros IMEI

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomerList">
        <Stack.Screen name="CustomerList" component={CustomerList} />
        <Stack.Screen name="ImeiList" component={ImeiList} />
        <Stack.Screen name="CustomerUpdate" component={CustomerUpdate} />
        <Stack.Screen name="ImeiUpdate" component={ImeiUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
