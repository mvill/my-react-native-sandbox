import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import HomeView from './src/views/home/HomeView';
import View2 from './src/views/view2/View2';

export default function App() {
  return (
    <>
      <HomeView />
      <View2 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
