import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import * as actions from './actions';
import {ThunkType} from './Types';

interface TSignUpData {
  email: string;
  password: string;
  displayName?: string;
}
type TSignUp = (createAccountData: TSignUpData) => ThunkType;

export const signUp: TSignUp =
  ({email, password, displayName}) =>
  async dispatch => {
    try {
      const credentials = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      if (credentials && displayName) {
        await credentials.user.updateProfile({displayName});
      }

      const user = await auth().currentUser;

      dispatch(actions.setUserData(user));
    } catch (error) {
      console.error(error);
    }
  };

interface TSignInData {
  email: string;
  password: string;
}
type TSignIn = (signInData: TSignInData) => ThunkType;

export const signIn: TSignIn =
  ({email, password}) =>
  async dispatch => {
    try {
      await auth().signInWithEmailAndPassword(email, password);

      const user = await auth().currentUser;

      dispatch(actions.setUserData(user));
    } catch (error) {
      console.error(error);
    }
  };

export const logout = (): ThunkType => async dispatch => {
  try {
    await auth().signOut();

    dispatch(actions.setUserData(null));
  } catch (error) {
    console.error(error);
  }
};
