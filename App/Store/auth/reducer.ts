import {AUTH_SET_USER_DATA, AUTH_SET_IS_AUTH} from './actionTypes';
import {TActions} from './Types';
import {TInitialState, initialSate} from './state';

export const authReducer = (
  state = initialSate,
  action: TActions,
): TInitialState => {
  switch (action.type) {
    case AUTH_SET_USER_DATA:
      return {
        ...state,
        user: action.user,
      };

    case AUTH_SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};
