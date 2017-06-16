import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.state = {registrationForm: false, loginForm: false};
  }

  handleLoginClick() {
    this.setState({registrationForm: true});
  }

  handleBackClick() {
    this.setState({registrationForm: false});
  }

  render() {
    const registrationForm = this.state.registrationForm;

    let button = null;
    if (registrationForm) {
      button = <BackButton onClick={this.handleBackClick} />;
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
        <input className="input" type="text" placeholder="Email"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input" type="password" placeholder="Password"/>
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
      Login
    </button>
    </div>
  );
}

function BackButton(props) {
  return (
    <button onClick={props.onClick}>
      Back
    </button>
  );
}

export default Login;