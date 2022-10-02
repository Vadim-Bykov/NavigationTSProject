import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  InfoItemScreenProps,
  InfoStackParamList,
} from '../Navigators/NavTypes/InfoStackTypes';

// type InfoItemRouteProps = RouteProp<InfoStackParamList, 'InfoItem'>;
type InfoItemRouteProps = InfoItemScreenProps['route'];

export const InfoItemScreen: React.FC<InfoItemScreenProps> = ({
  // route,
  navigation,
}) => {
  const route = useRoute<InfoItemRouteProps>();

  console.log(route.params?.id);
  const go = () => navigation.navigate('HomeTab', {screen: 'Home'});

  return (
    <View style={styles.container}>
      <Text>InfoScreen</Text>
      <Text>{route.params?.id}</Text>
      <Button
        title="Go to InfoList"
        onPress={() => {
          navigation.navigate('InfoList');
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
