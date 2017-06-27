import initialState from './initialState';
import * as Actions from '../actions/topicActions'


export default function topicReducer(state = initialState.topics, action) {

  switch(action.type) {
    case 'LOAD_TOPICS_SUCCESS':
      console.log('from load topics', action.payload)
      return Object.assign({}, state,
        {topics: action.payload.topics}
      )
    case 'LOAD_TOPICS_FAIL':
      console.log('failed to load topics')
      return state
    default:
      return state;
  }
}