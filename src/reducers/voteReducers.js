import initialState from './initialState';
import * as Actions from '../actions/topicActions'


export default function voteReducer(state = initialState.votes, action) {

  switch(action.type) {
    case 'UP_VOTE_SUCCESS':
      console.log('vote UP VOTE SUCCESS', action.payload)
      return Object.assign({}, state,
        {votes: {id: action.payload.topic_id, up_vote: true}}
      )
    default:
      return state;
  }
}