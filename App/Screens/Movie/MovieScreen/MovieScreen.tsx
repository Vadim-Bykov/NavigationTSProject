import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MovieScreenProps} from '../../../Navigators/MovieStackNavigator';

export const MovieScreen: React.FC<MovieScreenProps> = ({
  navigation,
  route,
}) => {
  //  const go = () => navigation.navigate('Movie', {movieId: 1})

  return (
    <View style={styles.container}>
      <Text>MovieScreen</Text>
      <Text>{route.params.movieId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
