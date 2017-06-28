import initialState from './initialState';

import * as Conversations from '../actions/conversationActions'

export default function topicReducer(state = initialState.topics, action) {

  switch(action.type) {
    case 'UPLOAD_SUCCESS':
      return Object.assign({}, state,
        {...action.payload}
      );

    case 'UPLOAD_FAIL':
      return Object.assign({}, state,
        {...action.payload}
      )

    case 'DESCRIPTION_SUCCESS':
      return Object.assign({}, state,
        {...action.payload}
      )

    case 'DESCRIPTION_FAIL':
      return Object.assign({}, state,
        {...action.payload}
      )

    case 'CLEAR_MESSAGE':
      return Object.assign({}, state,
        {...action.payload}
      )

    case 'SUBJECT_SUBMIT':
      Conversations.submitSubject( action.payload.token ,  action.payload.subject, action.payload.conv_id )
      return  state

    case 'SUBJECT_SUCCESS':
      return Object.assign({}, state,
        {...action.payload}
      )

    case 'SUBJECT_FAIL':
      return Object.assign({}, state,
        {...action.payload}
      )



    default:
      return state;
  }
}