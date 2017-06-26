import {combineReducers} from 'redux';
import user from './userReducers';
import topics from './topicReducers';
import upvotes from './upvoteReducers'
import downvotes from './downvoteReducers'
import conversations from './conversationReducers'

const rootReducer = combineReducers({
  // short hand property names
  user: user,
  topics: topics,
  upvotes: upvotes,
  downvotes: downvotes,
  conversations: conversations
})

export default rootReducer;