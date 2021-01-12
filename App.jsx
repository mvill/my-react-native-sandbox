import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from '@reduxjs/toolkit';
import { connect, Provider } from 'react-redux';
import MinesweeperScreen from './src/views/minesweeper/MinesweeperScreen';
import CptScreen from './src/views/cpt/CptScreen';
import rootReducer from './src/store/reducers/_rootReducer';
import HomeScreen from './src/views/home/HomeScreen';

const appViewStyle = {
  marginTop: StatusBar.currentHeight,
  flex: 1,
};

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

@connect(
  state => ({
    screenId: state.screenManager.screenId
  })
)
class AppContent extends React.Component {
  render() {
    const { screenId } = this.props;
    return (
      <View style={appViewStyle}>
        {screenId === 'HOME' && <HomeScreen/>}
        {screenId === 'MINESWEEPER' && <MinesweeperScreen/>}
        {/* <MinesweeperScreen /> */}
        {/* <CptScreen /> */}
      </View>
    );
  }
}


export default class App extends React.Component {
  render() {
    const { screenId } = this.props;
    return (
      <Provider store={store}>
        <AppContent />
      </Provider>
    );
  }
}
