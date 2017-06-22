import initialState from './initialState';
import * as Actions from '../actions/topicActions'


export default function topicReducer(state = initialState.topics, action) {

  switch(action.type) {
    case 'LOAD_TOPICS_SUCCESS':
    console.log('from load topics', action.payload)
      return Object.assign({}, state,
        action.payload
      )
      case 'ATTEMPT_UP_VOTE':
      console.log('from attempt upvote', action.payload)
      return state
       default:
      return state;
  }
}