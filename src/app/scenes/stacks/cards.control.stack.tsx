import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CardControlsScreen from '../cards/card.control.screen';
import {getHeader} from './bottom.tab.stack';

export type CardControlRoutes = {
  CardsControl: undefined;
};

const Stack = createStackNavigator<CardControlRoutes>();

const CardsControlStack = () => (
  <Stack.Navigator
    initialRouteName="CardsControl"
    screenOptions={{
      headerLeftContainerStyle: {paddingLeft: 20},
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerTitleStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24,
      },
      headerStyle: {
        height: 92,
      },
      headerBackground: () => getHeader(),
    }}>
    <Stack.Screen
      name="CardsControl"
      component={CardControlsScreen}
      options={() => ({
        headerTitle: 'Cards Control',
      })}
    />
  </Stack.Navigator>
);

export default CardsControlStack;
