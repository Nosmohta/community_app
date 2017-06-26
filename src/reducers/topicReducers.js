import initialState from './initialState';
import * as Actions from '../actions/topicActions'


export default function topicReducer(state = initialState.topics, action) {

  switch(action.type) {
    case 'LOAD_TOPICS_SUCCESS':
      console.log('from load topics', action.payload)
      return Object.assign({}, state,
        {topics: action.payload.topics}
      )
    case 'ATTEMPT_UP_VOTE':
      console.log('from attempt upvote', action.payload)
      Actions.attemptUpVote(action.payload.topic_id, action.payload.token)
      return state
    // case 'UP_VOTE_SUCCESS':
    //   console.log('UP VOTE SUCCESS', action.payload)
    //   return state
    case 'UP_VOTE_FAIL':
      console.log('up vote failed')
      return state
    case 'ATTEMPT_DOWN_VOTE':
      console.log('from attempt downvote', action.payload)
      Actions.attemptDownVote(action.payload.topic_id, action.payload.token)
      return state
    case 'DOWN_VOTE_SUCCESS':
      return state
    case 'DOWN_VOTE_FAIL':
      console.log('up vote failed')
      return state
    default:
      return state;
  }
}