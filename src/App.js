/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import linking from './utils/linking';
import {
  ONBOARDING_SCREEN,
  HOME_SCREEN,
  DETAILS_SCREEN,
} from './constants/routes';

//SCREEN
import OnBoarding from './screens/OnBoarding';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ONBOARDING_SCREEN}>
        <Stack.Screen name={ONBOARDING_SCREEN} component={OnBoarding} />
        <Stack.Screen name={HOME_SCREEN} component={Home} />
        <Stack.Screen name={DETAILS_SCREEN} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
