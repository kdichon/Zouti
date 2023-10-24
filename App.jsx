import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/screens/private/Home';
import {LogIn} from './src/screens/public';
import RouteDavisScreen from './exo/routeDavis/RouteDavisScreen';
import {Provider} from 'react-redux';
import {store} from './exo/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RouteDavisScreen />
    </Provider>
  );
};

export default App;
