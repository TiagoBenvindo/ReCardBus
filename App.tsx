import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <Routes />
    </Background>
  );
}



