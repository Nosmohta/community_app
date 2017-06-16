import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {registrationForm: false, loginForm: false};
  }

  handleLoginClick() {
    this.setState({registrationForm: true});
  }

  handleLogoutClick() {
    this.setState({registrationForm: false});
  }

  render() {
    const registrationForm = this.state.registrationForm;

    let button = null;
    if (registrationForm) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting registrationForm={registrationForm} />
        {button}
      </div>
    );
  }
}

function ShowRegistration(props) {
  return (
    <Columns>
    <form className="register">
    <h1>Community Login</h1>
       <p className="control">
        <input className="input" type="text" placeholder="First Name"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input" type="text" placeholder="Last Name"/>
      </p>
       <br></br>
      <p className="control">
        <input className="input" type="text" placeholder="Email"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input" type="password" placeholder="Password"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input" type="password" placeholder="Confirm"/>
      </p>
    </form>
    </Columns>
    );
}

function GuestGreeting(props) {
  return <h1>Community App</h1>;
}

function Greeting(props) {
  const registrationForm = props.registrationForm;
  if (registrationForm) {
    return <ShowRegistration />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <div>
    <button onClick={props.onClick}>
      Register
    </button>
    <button onClick={props.onClick}>
      Login
    </button>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default Login;