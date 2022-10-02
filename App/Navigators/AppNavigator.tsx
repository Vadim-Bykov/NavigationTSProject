import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RouteProp, NavigatorScreenParams} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerNavigator} from './Drawer/DrawerNavigator';
import {TUser} from '../Store/auth/Types';
import {setIsAuth} from '../Store/auth/actions';
import * as authSelectors from '../Store/auth/selectors';
import {AuthStack, AuthStackParamList} from './AuthStack';
import {DrawerParams} from './NavTypes/DrawerTypes';
import {BottomTabNavigator, TabParamList} from './BottomTabNavigator';
import * as commonSelectors from '../Store/common/selectors';

export type AppNavigatorParams = {
  Main: NavigatorScreenParams<TabParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

type AppNavigatorProps = NativeStackScreenProps<AppNavigatorParams>;
export type MainStackProps = NativeStackScreenProps<AppNavigatorParams, 'Main'>;
export type AuthStackProps = NativeStackScreenProps<
  AppNavigatorParams,
  'AuthStack'
>;

const Stack = createNativeStackNavigator<AppNavigatorParams>();

export const AppNavigator: React.FC<AppNavigatorProps> = ({
  navigation,
  route,
}) => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsAuth);
  const error = useSelector(commonSelectors.getError);

  const onAuthStateChanged = (user: TUser) => {
    if (initializing) setInitializing(false);

    const isAuth = user ? true : false;
    dispatch(setIsAuth(isAuth));
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    // auth().createUserWithEmailAndPassword('aaa@gmail.com', '111111');
    const user = auth().currentUser;
  }, []);

  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuth ? (
          // <Stack.Screen name="Main" component={DrawerNavigator} />
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </>
  );
};
