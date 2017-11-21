import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'
import { Link } from 'react-router-dom'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {notLoggedIn: true};
 }


  render() {

    return (
      <div>
        <Columns>
          <form className="register">
            <img className="logo" src="YourCityLogo.png" alt="Smiley face" height="150" width="150"/ >
            <h1 className="form-title">CommunityUp</h1>
            <br></br>
            <p className="control">
            <Link className="button is-outlined is-large" to='/register'>Sign Up!</Link>
            </p>
            <br></br>
            <p className="home-form">or</p>
            <br></br>
            <Link className="button is-outlined is-large" to='/login'>Login</Link>
          </form>
        </Columns>
      </div>
    )
  }
}

export default Home;
