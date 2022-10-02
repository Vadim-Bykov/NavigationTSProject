import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../../Screens/HomeScreen';
import {DrawerParams} from '../NavTypes/DrawerTypes';
import {InfoStack} from '../InfoStack';
import {HomeTabProps} from '../BottomTabNavigator';
import {FilmScreen} from '../../Screens/FilmDrawer/FilmScreen';
import {DrawerContent} from './components/DrawerContent';
import {Icon} from 'react-native-elements';

const Drawer = createDrawerNavigator<DrawerParams>();

enum IconName {
  Home = 'home',
  Info = 'info',
  Film = 'movie',
}

export const DrawerNavigator: React.FC<HomeTabProps> = ({
  navigation,
  route,
}) => {
  const go = () =>
    navigation.navigate('Main', {
      screen: 'HomeTab',
      params: {
        screen: 'Info',
        params: {screen: 'InfoItem', params: {id: 5000}},
      },
    });

  return (
    // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Navigator
      screenOptions={({route}) => ({
        drawerIcon: ({color, size}) => (
          <Icon
            name={IconName[route.name]}
            color={color}
            size={size}
            tvParallaxProperties={undefined}
          />
        ),
      })}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Info" component={InfoStack} />
      <Drawer.Screen name="Film" component={FilmScreen} />
    </Drawer.Navigator>
  );
};
