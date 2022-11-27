/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import Router from './Router/Router';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
