import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MoreScreen from '../more/more.dashboard.screen';

export type MoreRoutes = {
  MoreScreen: undefined;
};

const Stack = createStackNavigator<MoreRoutes>();

const MoreStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="MoreScreen">
    <Stack.Screen name="MoreScreen" component={MoreScreen} />
  </Stack.Navigator>
);

export default MoreStack;
