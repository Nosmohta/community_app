import {combineReducers} from 'redux';
import users from './userReducers';
import topics from './topicReducers';

const rootReducer = combineReducers({
  // short hand property names
  users: users,
  topics: topics

})

export default rootReducer;