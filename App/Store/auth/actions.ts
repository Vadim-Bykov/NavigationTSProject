import * as actionTypes from './actionTypes';
import {TUser} from './Types';

export interface TSetIsAuth {
  type: typeof actionTypes.AUTH_SET_IS_AUTH;
  isAuth: boolean;
}

type setIsAuthAction = (isAuth: boolean) => TSetIsAuth;

export const setIsAuth: setIsAuthAction = isAuth => ({
  type: actionTypes.AUTH_SET_IS_AUTH,
  isAuth,
});

export interface TSetUserData {
  type: typeof actionTypes.AUTH_SET_USER_DATA;
  user: TUser;
}

type setUserDataAction = (user: TUser) => TSetUserData;

export const setUserData: setUserDataAction = user => ({
  type: actionTypes.AUTH_SET_USER_DATA,
  user,
});
