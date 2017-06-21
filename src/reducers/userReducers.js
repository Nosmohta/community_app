
import initialState from './initialState';
import Login from '../Login'

import * as Actions from '../actions/userActions'


export default function userReducer(state = initialState, action) {

  switch(action.type) {
    case 'LOAD_USERS_SUCCESS':
      console.log('from load users', action.payload)
      return Object.assign({}, state,
        action.payload
      )
    case 'ATTEMPT_LOGIN':
      // set state to login pending
      Actions.attemptLogin(action.payload.email, action.payload.password)
      return state

    case 'LOGIN_SUCCESS':
      console.log("IN REDUCER... login success")
      state = {
        ...state,
        pathname: '/topics',
        token: action.payload.token,
        logged_in: true
      }
      return state

    case 'LOGIN_FAIL':
      console.log("IN REDUCER... login fail")
      state = {
        ...state,
        alert_message: action.payload.message
      }
      return state


    default:
      return state;

  }
}

