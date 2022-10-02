import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {authReducer} from './auth/reducer';
import {commonReducer} from './common/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

type TRootReducer = typeof rootReducer;
export type TAppState = ReturnType<TRootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
