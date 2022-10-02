import {NavigatorScreenParams} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {InfoItemScreen} from '../Screens/InfoItemScreen';
import {InfoListScreen} from '../Screens/InfoListScreen';
import {InfoStackParamList} from './NavTypes/InfoStackTypes';
import {InfoDrawerScreenProps} from './NavTypes/DrawerTypes';

const Stack = createNativeStackNavigator<InfoStackParamList>();

export const InfoStack: React.FC<InfoDrawerScreenProps> = ({
  navigation,
  route,
}) => {
  const goToHome = () =>
    navigation.navigate('Info', {screen: 'InfoItem', params: {id: 5}});
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="InfoList" component={InfoListScreen} />
      <Stack.Screen name="InfoItem" component={InfoItemScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
