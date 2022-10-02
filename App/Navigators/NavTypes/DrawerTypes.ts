import {TabParamList} from './../BottomTabNavigator';
import {
  RouteProp,
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  DrawerScreenProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {InfoStackParamList} from './InfoStackTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigatorParams} from '../AppNavigator';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type DrawerParams = {
  Home: undefined;
  Info: NavigatorScreenParams<InfoStackParamList>;
  Film: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParams, 'Home'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList>,
    NativeStackScreenProps<AppNavigatorParams>
  >
>;

export type InfoDrawerScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParams, 'Info'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList>,
    NativeStackScreenProps<AppNavigatorParams>
  >
>;

export type FilmScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParams, 'Film'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList>,
    NativeStackScreenProps<AppNavigatorParams>
  >
>;

// type InfoScreenRouteProps = InfoScreenProps['route'] // = ({params}) => get separate route params: params, path ...
// type InfoScreenRouteProps = RouteProp<DrawerParams, 'Info'>

// export type HomeNavigationProps = HomeScreenProps['navigation']
// export type HomeNavigationProps = DrawerNavigationProp<DrawerParams, 'Home'>
