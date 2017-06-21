
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

          state = {
            ...state,
            alert_message: "test"//response.message,
            // logged_in:response.logged_in,
            // token: response.token
          }
          return state


      return state

    case 'LOGIN-SUCCESS':
      state = {
        ...state,
        token: action.payload.token,
        logged_in: true
      }
      return state

    case 'LOGIN-FAIL':
      state = {
        ...state,
        alert_message: action.payload.message
      }
      return state


    default:
      return state;

  }
}

