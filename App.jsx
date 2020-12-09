import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import MinesweeperScreen from './src/views/minesweeper/MinesweeperScreen';
import CptScreen from './src/views/cpt/CptScreen';
import rootReducer from './src/store/reducers/_rootReducer';

const appViewStyle = {
  marginTop: StatusBar.currentHeight,
  flex: 1,
};

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function App() {
  return (
    <Provider store={store}>
      <View style={appViewStyle}>
        {/* <MinesweeperScreen /> */}
        <CptScreen />
      </View>
    </Provider>
  );
}
