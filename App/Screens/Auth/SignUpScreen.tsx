import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {SignUpScreenProps} from '../../Navigators/AuthStack';
import {signIn, signUp} from '../../Store/auth/operations';

export const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  // navigation.navigate('')
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <Button
        title="Sign up"
        onPress={() =>
          dispatch(
            signUp({
              email: 'bbb@gmail.com',
              password: '111111',
              displayName: 'Vadim',
            }),
          )
        }
      />

      <Button
        title="Go to sign in"
        onPress={() => navigation.navigate('SignIn')}
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
