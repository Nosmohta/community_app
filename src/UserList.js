
import React, {Component} from 'react';

class UserList extends Component {

componentDidMount() {
  console.log('from userlist ', this.props.users)
}
render () {
  return (
      <ul>

      </ul>
  );
 }
}

export default UserList;