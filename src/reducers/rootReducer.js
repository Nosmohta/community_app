import {combineReducers} from 'redux';
import user from './userReducers';
import topics from './topicReducers';

const rootReducer = combineReducers({
  // short hand property names
  user: user,
  topics: topics

})

export default rootReducer;