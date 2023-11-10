// AppNavigator.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerList from '../../components/CustomerList';
import ImeiList from '../../components/ImeiList';
import CustomerUpdate from '../../components/CustomerUpdate';
import ImeiUpdate from '../../components/ImeiUpdate';
import GPSDataMap from '../../components/GPSDataMap';
// import CustomerList from './CustomerList';
// import ImeiList from './ImeiList';
// import CustomerUpdate from './CustomerUpdate';
// import ImeiUpdate from './ImeiUpdate';
// import GPSDataMap from './GPSDataMap'; // Importez le nouveau composant GPSDataMap

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomerList">
        <Stack.Screen name="CustomerList" component={CustomerList} />
        <Stack.Screen name="ImeiList" component={ImeiList} />
        <Stack.Screen name="CustomerUpdate" component={CustomerUpdate} />
        <Stack.Screen name="ImeiUpdate" component={ImeiUpdate} />
        <Stack.Screen name="GPSDataMap" component={GPSDataMap} />
        {/* Nouvelle route pour GPSDataMap */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
