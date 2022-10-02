import {TAppState} from './../store';

export const getIsAuth = (state: TAppState) => state.auth.isAuth;
export const getUser = (state: TAppState) => state.auth.user;
