import initialState from './initialState';
import * as Actions from '../actions/voteActions'


export default function upvoteReducer(state = initialState.upvotes, action) {

  switch(action.type) {
    case 'ATTEMPT_UP_VOTE':
      console.log('from attempt upvote', action.payload)
      Actions.attemptUpVote(action.payload.topic_id, action.payload.token)
      return state
    case 'UP_VOTE_SUCCESS':
      return [
      ...state.slice(1, 1, action.index),
        action.payload.topic_id,
        ...state.slice(action.index) ]
      console.log('vote UP VOTE SUCCESS', action.payload)

    case 'CANCEL_UP_VOTE':
      return state
    default:
      return state;
  }
}