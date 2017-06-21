import {combineReducers} from 'redux';
import user from './userReducers';

const rootReducer = combineReducers({
  // short hand property names
  user: user
})

export default rootReducer;