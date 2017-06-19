
import {connect} from 'react-redux';
import * as userActions from './actions/userActions';
import React, {Component} from 'react';
import UserList from './UserList'

class Users extends Component {
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

  console.log(state)

}
export default connect(mapStateToProps)(Users);