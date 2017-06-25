import {combineReducers} from 'redux';
import user from './userReducers';
import topics from './topicReducers';
import votes from './voteReducers'

const rootReducer = combineReducers({
  // short hand property names
  user: user,
  topics: topics,
  votes: votes
})

export default rootReducer;