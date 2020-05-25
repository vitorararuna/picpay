import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //todos os tipos de navegação devem estar envolvidos nesse "NavigationContainer"
import { StatusBar } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
