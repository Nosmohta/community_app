import initialState from './initialState';
import * as Actions from '../actions/voteActions'


export default function downvoteReducer(state = initialState.downvotes, action) {

  switch(action.type) {
     case 'ATTEMPT_DOWN_VOTE':
      console.log('from attempt downvote', action.payload)
      Actions.attemptDownVote(action.payload.topic_id, action.payload.token)
      return state
    case 'DOWN_VOTE_SUCCESS':
      return [
      ...state.slice(0, action.index),
        action.payload.topic_id,
        ...state.slice(action.index) ]
      console.log('vote DOWN VOTE SUCCESS', action.payload)
    case 'CANCEL_DOWN_VOTE_SUCCESS':
         const newState = state.downvotes
      return state
    default:
      return state;
  }
}