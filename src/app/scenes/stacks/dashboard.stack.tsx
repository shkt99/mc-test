import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingDashboardScreen from '../onboarding/onboarding.dashboard.screen';
import {getHeader} from './bottom.tab.stack';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerTitle: 'Empty Stack',
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingDashboardScreen}
        options={{
          headerShown: true,
          headerTitle: 'Onboarding',
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
        }}
      />
    </Stack.Navigator>
  );
};
