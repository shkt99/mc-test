import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MoreScreen from '../more/more.dashboard.screen';
import {getHeader} from './bottom.tab.stack';

export type MoreRoutes = {
  MoreScreen: undefined;
};

const Stack = createStackNavigator<MoreRoutes>();

const MoreStack = () => (
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
    initialRouteName="MoreScreen">
    <Stack.Screen
      name="MoreScreen"
      component={MoreScreen}
      options={() => ({
        headerShown: true,
        headerTitle: 'More',
        headerLeft: () => null,
      })}
    />
  </Stack.Navigator>
);

export default MoreStack;
