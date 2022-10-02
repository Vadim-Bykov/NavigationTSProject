import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {InfoListScreenProps} from '../Navigators/NavTypes/InfoStackTypes';

export const InfoListScreen: React.FC<InfoListScreenProps> = ({
  route,
  navigation,
}) => {
  const go = () =>
    navigation.navigate('Main', {
      screen: 'HomeTab',
      params: {
        screen: 'Info',
        params: {screen: 'InfoItem', params: {id: 1000}},
      },
    });
  return (
    <View style={styles.container}>
      <Text>InfoScreen</Text>
      <Button
        title="Go to InfoItem"
        onPress={() => {
          navigation.navigate('InfoItem', {id: 10});
        }}
      />
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
