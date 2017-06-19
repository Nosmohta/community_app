import {combineReducers} from 'redux';
import users from './userReducers';

const rootReducer = combineReducers({
  // short hand property names
  users
})

export default rootReducer;