import React from 'react';
import {Provider} from 'react-redux';
import {store} from './exo/redux/store';
import Routes from './src/screens/Routes';
import {theme} from './src/core/theme';

const App = () => {
  return (
    <Provider theme={theme} store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
