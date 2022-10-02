import {TAppState} from '../store';
import {ThunkAction} from 'redux-thunk';
import {TSetError} from './actions';
import {Action} from 'redux';

export type TActions = TSetError;

export type ThunkType = ThunkAction<void, TAppState, unknown, Action>;
