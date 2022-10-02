import {Alert, StyleSheet} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {DrawerParams} from '../../NavTypes/DrawerTypes';

type DrawerNavigation = DrawerNavigationProp<DrawerParams>;

export const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const {
    state: {routeNames, index},
    navigation,
  } = props;
  //  const navigation = useNavigation<DrawerNavigation>();
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Home"
        focused={routeNames[index] === 'Home' ? true : false}
        icon={({focused, color, size}) => (
          <Icon
            name="home"
            color={color}
            size={size}
            tvParallaxProperties={undefined}
          />
        )}
        onPress={() => navigation.navigate('Home')}
      />

      <DrawerItem
        label="Info"
        focused={routeNames[index] === 'Info' ? true : false}
        icon={({focused, color, size}) => (
          <Icon
            name="info"
            color={color}
            size={size}
            tvParallaxProperties={undefined}
          />
        )}
        onPress={() => navigation.navigate('Info')}
      />

      <DrawerItem
        label="Film"
        focused={routeNames[index] === 'Film' ? true : false}
        icon={({focused, color, size}) => (
          <Icon
            name="movie"
            color={color}
            size={size}
            tvParallaxProperties={undefined}
          />
        )}
        onPress={() => navigation.navigate('Film')}
      />

      <DrawerItem label="Help" onPress={() => Alert.alert('Link to help')} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});
