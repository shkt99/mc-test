import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HeaderBackground from '../../../atomic/atoms/header/header';
import CardsStack from './cards.stack';
import MoreStack from './more.stack';
import RewardsStack from './rewards.stack';
import PfmStack from './pfm.stack';
import {Image} from 'react-native';

const returnIcon = (focused: boolean) => {
  if (focused) {
    return <Image source={require('../../../images/activeTab.png')} />;
  }
  return <Image source={require('../../../images/inactiveTab.png')} />;
};

export const getHeader = () => <HeaderBackground />;

const Tab = createBottomTabNavigator();

const BottomTabStack = () => (
  <Tab.Navigator
    backBehavior="history"
    initialRouteName={'Cards'}
    screenOptions={() => ({
      tabBarInactiveTintColor: '#ADADAD',
      headerBackground: () => getHeader(),
      headerTitleStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24,
      },
      headerStyle: {
        height: 92,
      },
    })}>
    <Tab.Screen
      name={'Cards'}
      component={CardsStack}
      options={() => ({
        tabBarIcon: ({focused}) => {
          return returnIcon(focused);
        },
        title: 'Cards',
      })}
    />
    <Tab.Screen
      name={'Rewards'}
      component={RewardsStack}
      options={() => ({
        tabBarIcon: ({focused}) => {
          return returnIcon(focused);
        },
        headerShown: true,
        headerTitle: 'Rewards',
      })}
    />
    <Tab.Screen
      name={'Pfm'}
      component={PfmStack}
      options={() => ({
        tabBarIcon: ({focused}) => {
          return returnIcon(focused);
        },
        headerShown: true,
        headerTitle: 'PFM',
      })}
    />
    <Tab.Screen
      name={'More'}
      component={MoreStack}
      options={() => ({
        tabBarIcon: ({focused}) => {
          return returnIcon(focused);
        },
        headerShown: true,
        headerTitle: 'More ',
      })}
    />
  </Tab.Navigator>
);

export default BottomTabStack;
