
import {connect} from 'react-redux';
import * as userActions from './actions/userActions';
import React, {Component} from 'react';
import UserList from './UserList'



class Users extends Component {
  componentWillReceiveProps(nextProps) {
console.log('componentWillReceiveProps ', nextProps)
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
  console.log('from users ', state.users);
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(Users);