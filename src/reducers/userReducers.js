import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = [], action) => {
  switch (action.type){
    case 'CREATE_USER':
        return [
          ...state,
          Object.assign({}, action.user)
        ];
    default:
          return state;
  }
};

export function userReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users
    default:
      return state;
  }
}