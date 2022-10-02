import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {SignInScreenProps} from '../../Navigators/AuthStack';
import {signIn} from '../../Store/auth/operations';

export const SignInScreen: React.FC<SignInScreenProps> = ({
  navigation,
  route,
}) => {
  const dispatch = useDispatch();
  // navigation.navigate('Main', {screen: 'Home'})
  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Button
        title="Sign in"
        onPress={() =>
          dispatch(signIn({email: 'bbb@gmail.com', password: '111111'}))
        }
      />

      <Button
        title="Go to sign up"
        onPress={() => navigation.navigate('SignUp')}
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
