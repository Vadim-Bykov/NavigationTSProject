import {TAppState} from './../store';
import {ThunkAction} from 'redux-thunk';
import {TSetIsAuth, TSetUserData} from './actions';
import {Action} from 'redux';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

// export interface TUser {
//   displayName: string | null;
//   email: string;
//   emailVerified: boolean;
//   isAnonymous: boolean;
//   metadata: [Object];
//   phoneNumber: string | null;
//   photoURL: string | null;
//   providerData: Array<[]>;
//   providerId: string;
//   tenantId: string | null;
//   uid: string;
//   //   uid: 'wWCI9SINRYTPASaX27LVG2g7oYJ3';
// }

export type TUser = FirebaseAuthTypes.User | null;

export type TActions = TSetUserData | TSetIsAuth;

export type ThunkType = ThunkAction<void, TAppState, unknown, Action>;
