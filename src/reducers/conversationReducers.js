import initialState from './initialState';
import * as Actions from '../actions/conversationActions'


export default function topicReducer(state = initialState.topics, action) {

  switch(action.type) {
    case 'UPLOAD_SUCCESS':
      console.log('from upload success', action.payload)
      return Object.assign({}, state,
        {conversations: action.payload}
      )
    case 'UPLOAD_FAIL':
      console.log('upload failed')
      return state
    case 'DESCRIPTION_SUCCESS':
      console.log('Description Success!', action.payload)
      return Object.assign({}, state,
        {conversations: action.payload}
      )
    default:
      return state;
  }
}