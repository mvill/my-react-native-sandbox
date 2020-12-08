import React from 'react';
import { View, StatusBar } from 'react-native';
import MinesweeperScreen from './src/views/minesweeper/MinesweeperScreen';

const appViewStyle = {
  marginTop: StatusBar.currentHeight,
  flex: 1,
};

export default function App() {
  return (
    <View style={appViewStyle}>
      <MinesweeperScreen />
    </View>
  );
}
