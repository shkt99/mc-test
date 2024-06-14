import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RewardsScreen from '../rewards/rewards.dashboard.screen';
import {getHeader} from './bottom.tab.stack';

export type RewardsRoutes = {
  RewardsScreen: undefined;
};

const Stack = createStackNavigator<RewardsRoutes>();

const RewardsStack = () => (
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
    initialRouteName="RewardsScreen">
    <Stack.Screen
      name="RewardsScreen"
      component={RewardsScreen}
      options={() => ({
        headerShown: true,
        headerTitle: 'Rewards',
        headerLeft: () => null,
      })}
    />
  </Stack.Navigator>
);

export default RewardsStack;
