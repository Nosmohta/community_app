import initialState from './initialState';
import * as Actions from '../actions/voteActions'


export default function upvoteReducer(state = initialState.upvotes, action) {

  switch(action.type) {
    case 'LOAD_UP_VOTES':
      console.log('load votes', action.payload)
      return {
        ...state,
        upvotes: [...state, action.payload._id]
    }
    case 'ATTEMPT_UP_VOTE':
      console.log('from attempt upvote', action.payload)
      Actions.attemptUpVote(action.payload.topic_id, action.payload.token)
      return state
    case 'UP_VOTE_SUCCESS':
      console.log(action.payload)
      return state
    case 'CANCEL_UP_VOTE_SUCCESS':
       console.log(state)
      let index = state.indexOf(action.payload.topic_id);
     if (index > -1)
     state.splice(index, 1);
      return state

    default:
      return state;
  }
}