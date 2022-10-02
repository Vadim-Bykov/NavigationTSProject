import axios, {AxiosError, AxiosResponse} from 'axios';
import {setError} from '../Store/common/actions';
import store from '../Store/store';

const handleSuccess = (response: AxiosResponse) => {
  return response;
};

const handleError = (error: AxiosError) => {
  console.log({'error.message': error.message});

  store.dispatch(setError(error.message));
  return Promise.reject(error);
};

export const configureAxios = () => {
  console.log('configureAxios');

  axios.interceptors.response.use(handleSuccess, handleError);
};
