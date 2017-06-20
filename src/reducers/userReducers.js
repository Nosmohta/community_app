import * as types from '../actions/actionTypes';
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

export default function userReducer(state = initialState.users, action) {

  switch(action.type) {
    case 'LOAD_USERS_SUCCESS':
    console.log('from load users', action.payload)
      return Object.assign({}, state,
        action.payload
      )
       default:
      return state;
  }
}