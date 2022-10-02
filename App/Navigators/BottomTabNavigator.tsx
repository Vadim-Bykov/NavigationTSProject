import {View, Text} from 'react-native';
import React from 'react';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import {DrawerParams} from './NavTypes/DrawerTypes';
import {DrawerNavigator} from './Drawer/DrawerNavigator';
import {AccountScreen} from '../Screens/Account/AccountScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigatorParams, MainStackProps} from './AppNavigator';
import {MovieStackNavigator, MovieStackParamsList} from './MovieStackNavigator';
import {Icon} from 'react-native-elements';

export type TabParamList = {
  HomeTab: NavigatorScreenParams<DrawerParams>;
  MoviesTab: NavigatorScreenParams<MovieStackParamsList>;
  AccountTab: undefined;
};

// type TabNavigatorProps = CompositeScreenProps<
//   BottomTabScreenProps<TabParamList>,
//   NativeStackScreenProps<AppNavigatorParams>
// >

export type HomeTabProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'HomeTab'>,
  NativeStackScreenProps<AppNavigatorParams>
>;

export type MoviesTabProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'MoviesTab'>,
  NativeStackScreenProps<AppNavigatorParams>
>;

export type AccountTabProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'AccountTab'>,
  NativeStackScreenProps<AppNavigatorParams>
>;

const BottomTab = createBottomTabNavigator<TabParamList>();

type TabBarData = {focused: boolean; color: string; size: number};
type RouteNames = 'HomeTab' | 'MoviesTab' | 'AccountTab';

const getIcon = (routeName: RouteNames, {focused, color, size}: TabBarData) => {
  let iconName = '';
  let type;

  switch (routeName) {
    case 'HomeTab':
      type = 'ionicon';
      iconName = focused ? 'home' : 'home-outline';
      break;

    case 'MoviesTab':
      type = 'ionicon';
      iconName = focused ? 'ios-list' : 'ios-list-outline';
      break;

    case 'AccountTab':
      type = 'font-awesome';
      iconName = focused ? 'user-circle-o' : 'user';

    default:
      break;
  }

  return (
    <Icon
      type={type}
      name={iconName}
      size={size}
      color={color}
      tvParallaxProperties={undefined}
    />
  );
};

export const BottomTabNavigator: React.FC<MainStackProps> = ({navigation}) => {
  const go = () =>
    navigation.navigate('Main', {
      screen: 'HomeTab',
      params: {
        screen: 'Info',
        params: {screen: 'InfoItem', params: {id: 33333}},
      },
    });

  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) =>
          getIcon(route.name, {focused, color, size}),
        tabBarStyle: {
          paddingBottom: 5,
        },
        tabBarActiveTintColor: 'red',
      })}>
      <BottomTab.Screen name="HomeTab" component={DrawerNavigator} />
      <BottomTab.Screen
        name="MoviesTab"
        component={MovieStackNavigator}
        options={({navigation, route}: MoviesTabProps) => {
          const go = () =>
            navigation.navigate('MoviesTab', {
              screen: 'Movie',
              params: {movieId: 10},
            });
          return {
            tabBarLabel: 'Movies',
          };
        }}
      />
      <BottomTab.Screen name="AccountTab" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};
