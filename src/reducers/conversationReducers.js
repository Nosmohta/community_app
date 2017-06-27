import initialState from './initialState';
import * as Actions from '../actions/conversationActions'


export default function topicReducer(state = initialState.topics, action) {

  switch(action.type) {
    case 'UPLOAD_SUCCESS':
      console.log('from upload success', action.payload)
      return Object.assign({}, state, {
        ...action.payload
        }
      )
    case 'UPLOAD_FAIL':
      console.log('upload failed')
      return state

    case 'DESCRIPTION_SUCCESS':
      console.log('Description Success!', action.payload)
      return Object.assign({}, state,
        {...action.payload}
      )
    case 'DESCRIPTION_FAIL':
      console.log('Description Fail!', action.payload)
      return Object.assign({}, state,
        {...action.payload}
      )


    default:
      return state;
  }
}