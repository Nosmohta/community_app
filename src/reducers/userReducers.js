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

//map state to props??

export default function userReducer(state = initialState.users, action) {

  switch(action.type) {
    case 'LOAD_USERS_SUCCESS':
      console.log(action.users)
      return state.users = action.users
    default:
      return state;
  }
}

