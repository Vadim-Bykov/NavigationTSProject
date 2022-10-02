import {TUser} from './Types';

export const initialSate = {
  isAuth: true as boolean,
  user: null as TUser,
};

export type TInitialState = typeof initialSate;
