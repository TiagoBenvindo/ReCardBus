import React from 'react';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hook/auth';
import { DMSans_400Regular, DMSans_700Bold, DMSans_500Medium, useFonts } from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }
  return (
    <Background>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}



