import {View, Text} from 'react-native';
import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MovieListScreen} from '../Screens/Movie/MovieListScreen/MovieListScreen';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MoviesTabProps, TabParamList} from './BottomTabNavigator';
import {AppNavigatorParams} from './AppNavigator';
import {MovieScreen} from '../Screens/Movie/MovieScreen/MovieScreen';

export type MovieStackParamsList = {
  MovieList: undefined;
  Movie: {movieId: number};
};

export type MovieListScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MovieStackParamsList, 'MovieList'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList>,
    NativeStackScreenProps<AppNavigatorParams>
  >
>;

export type MovieScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MovieStackParamsList, 'Movie'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList>,
    NativeStackScreenProps<AppNavigatorParams>
  >
>;

const Stack = createNativeStackNavigator<MovieStackParamsList>();

export const MovieStackNavigator: React.FC<MoviesTabProps> = ({
  navigation,
  route,
}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MovieList" component={MovieListScreen} />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={({route}: MovieScreenProps) => {
          //  console.log(route.params.movieId);
          return {};
        }}
      />
    </Stack.Navigator>
  );
};
