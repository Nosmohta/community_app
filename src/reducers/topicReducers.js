import initialState from './initialState';

// export default (state = [], action) => {
//   switch (action.type){
//     case 'CREATE_USER':
//         return [
//           ...state,
//           Object.assign({}, action.user)
//         ];
//     default:
//           return state;
//   }
// };

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