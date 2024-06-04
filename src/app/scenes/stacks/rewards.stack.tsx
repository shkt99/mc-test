import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RewardsScreen from '../rewards/rewards.dashboard.screen';

export type RewardsRoutes = {
  RewardsScreen: undefined;
};

const Stack = createStackNavigator<RewardsRoutes>();

const RewardsStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="RewardsScreen">
    <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
  </Stack.Navigator>
);

export default RewardsStack;
