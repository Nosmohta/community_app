import initialState from './initialState';
import Login from '../Login'

import * as Actions from '../actions/userActions'


export default function userReducer(state = initialState, action) {

  switch(action.type) {
    case 'LOAD_USERS_SUCCESS':
      console.log('from load users', action.payload);
      return Object.assign({}, state,
        action.payload
      )
    case 'ATTEMPT_LOGIN':
      // set state to login pending
      Actions.attemptLogin(action.payload.email, action.payload.password)
      return state

    case 'LOGIN_SUCCESS':
      console.log("IN REDUCER... login success")
      return {
        ...state,
        token: action.payload.token,
        logged_in: true
      }

    case 'LOGIN_FAIL':
      console.log("IN REDUCER... login fail")
      return {
        ...state,
        alert_message: action.payload.message
      }

    case 'ATTEMPT_REGISTER':
      Actions.attemptRegister(action.payload.firstName, action.payload.lastName,action.payload.email, action.payload.password )
      return state

    case 'REGISTRATION_SUCCESS':
      console.log(action.payload.message)
      return Object.assign({}, state,
        action.payload
      )

    case 'REGISTRATION_FAIL':
      console.log(action.payload.message)
      return Object.assign({}, state,
        action.payload
      )

    case 'ATTEMPT_LOGOUT':
      console.log(action.payload)
      return Object.assign({}, state,
        action.payload
      )

    default:
      return state;

  }
}

