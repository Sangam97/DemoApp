import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/stack';
import {LogBox} from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
