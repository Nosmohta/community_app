import {store} from './index.js';
import querystring from 'querystring';
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


export function attemptLogin(email, password) {

  const data = querystring.stringify({'email': email, 'password': password})
  const request = new Request('http://localhost:8080/login', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: data
  });
  fetch(request)
    .then((response) => {
      if(response.ok) {
        response.json().then((data) => {
          console.log("action success")
          return {
            type: 'LOGIN_SUCCESS',
            payload: {
              logged_in: true,
              message: '',
              token: data.token
            }
          }
        })
      } else {
        response.json().then((data) => {
          console.log("action fail")
          return {
            type: 'LOGIN_FAIL',
            payload: {
              logged_in: false,
              message: data.message,
              token: ''
            }
          }
        })
      }
    })
    .catch( err => console.log(err));

}

export function getAllUsers() {
  return fetch('http://localhost:8080/api/users')
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}
