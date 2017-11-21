import store from '../index.js';
import querystring from 'querystring';
import UserApi from '../api/UserApi';
import * as Actions from '../actions/userActions'

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
  return {type: 'LOAD_USERS_SUCCESS', payload: users};
}


export function attemptLogin(email, password) {
  const data = querystring.stringify({'email': email, 'password': password})
  const request = new Request('https://community-up-api.herokuapp.com/login', {
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
          localStorage.setItem('apiToken', data.token)
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              logged_in: true,
              message: '',
              token: data.token,

            }
          })
        })
      } else {
        response.json().then((data) => {
          console.log("action fail")
          localStorage.removeItem('apiToken');
          store.dispatch({
            type: 'LOGIN_FAIL',
            payload: {
              logged_in: false,
              message: data.message,
              token: ''
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
}



export function attemptRegister(firstname, lastname, email, password) {

  const data = querystring.stringify({
    'firstname': firstname.toLowerCase(),
    'lastname': lastname.toLowerCase(),
    'email': email.toLowerCase(),
    'password': password.toLowerCase()
  })

  const request = new Request('https://community-up-api.herokuapp.com/register', {
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
          console.log("Reg action success")
          store.dispatch({
            type: 'REGISTRATION_SUCCESS',
            payload: {
              logged_in: true,
              message: data.message,
              token: data.token
            }
          })
        })
      } else {
        response.json().then((data) => {
          console.log("Reg action fail")
          store.dispatch({
            type: 'REGISTRATION_FAIL',
            payload: {
              logged_in: false,
              message: data.message,
              token: ''
            }
          })
        })
      }
    })
    .catch( err => console.log(err));

}

export function attemptLogout() {
  localStorage.removeItem('apiToken');
  store.dispatch({
            type: 'ATTEMPT_LOGOUT',
            payload: {
              logged_in: false,
              alert_message: 'logout',
              token: '',
              conversations: ''
            }
          })
  store.dispatch({
            type: 'CLEAR_CONVERSATION',
            payload: {

              conversations: ''
            }
          })
}
