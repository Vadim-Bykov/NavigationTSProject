import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AccountTabProps} from '../../Navigators/BottomTabNavigator';
import {useSelector} from 'react-redux';
import {getUser} from '../../Store/auth/selectors';

export const AccountScreen: React.FC<AccountTabProps> = ({
  navigation,
  route,
}) => {
  const user = useSelector(getUser);
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
      <Text>{user?.displayName || 'DefaultName'}</Text>
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
