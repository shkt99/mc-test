import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import PfmScreen from '../pfm/cards.dashboard.screen';

export type PfmRoutes = {
  PfmScreen: undefined;
};

const Stack = createStackNavigator<PfmRoutes>();

const PfmStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="PfmScreen">
    <Stack.Screen name="PfmScreen" component={PfmScreen} />
  </Stack.Navigator>
);

export default PfmStack;
