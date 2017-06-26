import initialState from './initialState';
import * as Actions from '../actions/topicActions'


export default function downvoteReducer(state = initialState.downvotes, action) {

  switch(action.type) {
    case 'DOWN_VOTE_SUCCESS':
      return [
      ...state.slice(0, action.index),
        action.payload.topic_id,
        ...state.slice(action.index) ]
      console.log('vote DOWN VOTE SUCCESS', action.payload)
    case 'CANCEL_DOWN_VOTE':
      return state
    default:
      return state;
  }
}