import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  CardsScreen: undefined;
  Dashboard: undefined;
  BottomTab: undefined;
  CardsControlStack: undefined;
  Cards: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
