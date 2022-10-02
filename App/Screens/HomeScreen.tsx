import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {HomeScreenProps} from '../Navigators/NavTypes/DrawerTypes';
import * as authOperations from '../Store/auth/operations';

type HomeNavigationProps = HomeScreenProps['navigation'];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  route,
  // navigation
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeNavigationProps>();

  const go = () =>
    navigation.navigate('Info', {screen: 'InfoItem', params: {id: 5555}});

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Logout"
        onPress={() => dispatch(authOperations.logout())}
      />

      <Button title="Go InfoItem" onPress={go} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
