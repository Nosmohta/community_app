import * as types from './actionTypes';
import UserApi from '../api/UserApi';

export function loadUsers() {
  return function(dispatch) {
    return UserApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadUsersSuccess(users) {
  console.log('from userActions ', users)
  return {type: 'LOAD_USERS_SUCCESS', payload: users};
}
