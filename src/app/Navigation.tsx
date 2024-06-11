import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DashboardStack} from './scenes/stacks/dashboard.stack';
import BottomTabStack from './scenes/stacks/bottom.tab.stack';
import CardsControlStack from './scenes/stacks/cards.control.stack';

export type RootStackParamList = {
  Dashboard: undefined;
  BottomTab: undefined;
  CardsControlStack: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerTitle: 'Root Header Title',
        })}
        initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CardsControlStack"
          component={CardsControlStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
