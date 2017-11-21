import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import {attemptLogout} from './actions/userActions'

class Header extends Component {

  handleLogout(e) {
    attemptLogout()
  }

  render() {
    return (
      <nav className="nav has-shadow">
        <img className="community-logo" src="communityup_logo.png"></img>
        <div className="nav-right">
          <a className="nav-item"></a>
        </div>
        <Link className="nav-item  is-tab" to='/login' onClick={this.handleLogout}>
          <div className=" has-text-white ">Log out</div>
        </Link>
      </nav>
    );
  }
}
export default Header;
