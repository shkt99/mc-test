import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CardsScreen from '../cards/cards.dashboard.screen';

export type CardRoutes = {
  CardsScreen: undefined;
};

const Stack = createStackNavigator<CardRoutes>();

const CardsStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="CardsScreen">
    <Stack.Screen name="CardsScreen" component={CardsScreen} />
  </Stack.Navigator>
);

export default CardsStack;
