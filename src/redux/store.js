import { createStore } from 'redux';
import { combineReducers } from 'redux';

import user from './User/reducers';

const rootReducer = combineReducers({
  user
});

export const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);