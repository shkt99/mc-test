import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import PfmScreen from '../pfm/cards.dashboard.screen';
import {getHeader} from './bottom.tab.stack';

export type PfmRoutes = {
  PfmScreen: undefined;
};

const Stack = createStackNavigator<PfmRoutes>();

const PfmStack = () => (
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
    initialRouteName="PfmScreen">
    <Stack.Screen
      name="PfmScreen"
      component={PfmScreen}
      options={() => ({
        headerShown: true,
        headerTitle: 'PFM',
        headerLeft: () => null,
      })}
    />
  </Stack.Navigator>
);

export default PfmStack;
