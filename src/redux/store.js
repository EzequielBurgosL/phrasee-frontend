import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from './User/reducers';

const rootReducer = combineReducers({
  user
});

const middlewares = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);