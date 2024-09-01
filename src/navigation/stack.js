import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import Home from '../screens/HomeScreen';
import Splash from '../screens/SplashScree';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}} // This hides the header for all screens
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}

export default MainStack;
