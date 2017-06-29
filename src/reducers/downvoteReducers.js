import initialState from './initialState';
import * as Actions from '../actions/voteActions'


export default function downvoteReducer(state = initialState.downvotes, action) {

  switch(action.type) {
     case 'ATTEMPT_DOWN_VOTE':
      console.log('from attempt downvote', action.payload)
      Actions.attemptDownVote(action.payload.topic_id, action.payload.token)
      return state
    case 'DOWN_VOTE_SUCCESS':
      console.log('vote DOWN VOTE SUCCESS', action.payload)
      return state
    case 'CANCEL_DOWN_VOTE_SUCCESS':
         const newState = state.downvotes
      return state
    default:
      return state;
  }
}