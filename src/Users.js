
import {connect} from 'react-redux';
import * as userActions from './actions/userActions';
import React, {Component} from 'react';
import UserList from './UserList'
import {loadUsers} from './actions/userActions';

class Users extends Component {
  componentDidMount() {

}


  render() {

return (
      <div>
        <h1>Users</h1>
        <div>
          <UserList users={this.props.users} />
        </div>
      </div>
      )
  }

}

function mapStateToProps(state, ownProps) {
console.log('from users ', state)
  return state.users

}
export default connect(mapStateToProps)(Users);
//export default Users