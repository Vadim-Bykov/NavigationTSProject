import {TabParamList} from './../BottomTabNavigator';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  NavigatorScreenParams,
  RouteProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {DrawerParams} from './DrawerTypes';
import {AppNavigatorParams} from './../AppNavigator';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type InfoStackParamList = {
  InfoList: undefined;
  InfoItem: {id: number} | undefined;
};

export type InfoListScreenProps = CompositeScreenProps<
  NativeStackScreenProps<InfoStackParamList, 'InfoList'>,
  CompositeScreenProps<
    DrawerScreenProps<DrawerParams>,
    NativeStackScreenProps<AppNavigatorParams>
  >
>;
export type InfoItemScreenProps = CompositeScreenProps<
  NativeStackScreenProps<InfoStackParamList, 'InfoItem'>,
  CompositeScreenProps<
    CompositeScreenProps<
      DrawerScreenProps<DrawerParams>,
      BottomTabScreenProps<TabParamList>
    >,
    NativeStackScreenProps<AppNavigatorParams>
  >
>;

// type ScreenNavigationProp<T extends keyof DrawerParams> =
//   NativeStackNavigationProp<DrawerParams, T>;

// type ScreenRouteProp<T extends keyof DrawerParams> = RouteProp<DrawerParams, T>;
// type InfoStack<T extends keyof DrawerParams> = {
//   route: ScreenRouteProp<T>;
//   navigation: ScreenNavigationProp<T>;
// };
