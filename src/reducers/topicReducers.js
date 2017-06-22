import initialState from './initialState';


export default function topicReducer(state = initialState.topics, action) {

  switch(action.type) {
    case 'LOAD_TOPICS_SUCCESS':
    console.log('from load topics', action.payload)
      return Object.assign({}, state,
        action.payload
      )
       default:
      return state;
  }
}