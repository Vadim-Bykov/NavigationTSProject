import * as actionTypes from './actionTypes';

export interface TSetError {
  type: typeof actionTypes.COMMON_SET_ERROR;
  error: string;
}

type setError = (error: string) => TSetError;

export const setError: setError = error => ({
  type: actionTypes.COMMON_SET_ERROR,
  error,
});
