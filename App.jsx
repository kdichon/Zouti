import React from 'react';
import {Provider} from 'react-redux';
import {store} from './exo/redux/store';
import Routes from './src/screens/Routes';
import {theme} from './src/core/theme';
import Demo from './src/screens/public/Demo';
import RemoteDataServer from './src/core/RemoteDataScreen';
import MapScreen from './src/screens/private/Mapview/MapScreen';

const App = () => {
  return (
    <Provider theme={theme} store={store}>
      {/* <Routes /> */}
      {/* <RemoteDataServer /> */}
      {/* <AppNavigator /> */}
      <MapScreen />
    </Provider>
  );
};

export default App;
