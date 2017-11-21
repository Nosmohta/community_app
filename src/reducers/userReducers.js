import initialState from './initialState'
import Login from '../Login'

import * as Actions from '../actions/userActions'


export default function userReducer(state = initialState.users, action) {

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
      return Object.assign({}, state,
        action.payload
      )

    case 'LOGIN_FAIL':
      return Object.assign({}, state,
          action.payload
        )

    case 'ATTEMPT_REGISTER':
      Actions.attemptRegister(action.payload.firstName, action.payload.lastName,action.payload.email, action.payload.password )
      return state

    case 'REGISTRATION_SUCCESS':
      return Object.assign({}, state,
        action.payload
      )

    case 'REGISTRATION_FAIL':
      return Object.assign({}, state,
        action.payload
      )

    case 'CLEAR_MESSAGE':
      return Object.assign({}, state,
        {...action.payload}
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
