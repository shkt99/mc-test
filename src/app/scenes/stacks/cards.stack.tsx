import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CardsScreen from '../cards/cards.dashboard.screen';
import {getHeader} from './bottom.tab.stack';

export type CardRoutes = {
  CardsScreen: undefined;
};

const Stack = createStackNavigator<CardRoutes>();

const CardsStack = () => (
  <Stack.Navigator
    screenOptions={() => ({
      tabBarInactiveTintColor: '#ADADAD',
      headerBackground: () => getHeader(),
      headerTitleStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24,
        marginBottom: 10,
      },
      headerStyle: {
        height: 92,
      },
    })}
    initialRouteName="CardsScreen">
    <Stack.Screen
      name="CardsScreen"
      component={CardsScreen}
      options={() => ({
        headerShown: true,
        headerTitle: 'Cards',
      })}
    />
  </Stack.Navigator>
);

export default CardsStack;
