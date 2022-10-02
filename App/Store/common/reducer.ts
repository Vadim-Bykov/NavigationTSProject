import {COMMON_SET_ERROR} from './actionTypes';
import {TActions} from './Types';
import {TInitialState, initialSate} from './state';

export const commonReducer = (
  state = initialSate,
  action: TActions,
): TInitialState => {
  switch (action.type) {
    case COMMON_SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
