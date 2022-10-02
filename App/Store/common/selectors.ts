import {TAppState} from '../store';

export const getError = (state: TAppState) => state.common.error;
