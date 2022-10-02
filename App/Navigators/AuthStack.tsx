import {CompositeScreenProps} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {SignInScreen} from '../Screens/Auth/SignInScreen';
import {SignUpScreen} from '../Screens/Auth/SignUpScreen';
import {AppNavigatorParams, AuthStackProps} from './AppNavigator';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'SignIn'>,
  NativeStackScreenProps<AppNavigatorParams>
>;
export type SignUpScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'SignUp'>,
  NativeStackScreenProps<AppNavigatorParams>
>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({navigation}) => {
  const go = () =>
    navigation.navigate('Main', {
      screen: 'HomeTab',
      params: {screen: 'Info', params: {screen: 'InfoItem', params: {id: 10}}},
    });

  // navigation.navigate('AuthStack', {screen: 'SignIn'})
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
