import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'


class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.state = {registrationForm: false, RegisterForm: false};
  }

  handleRegisterClick() {
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
      button = <RegisterButton onClick={this.handleRegisterClick} />;
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
    <h1>Community Register</h1>
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

function RegisterButton(props) {
  return (
    <div>
    <button onClick={props.onClick}>
      Register
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

export default Register;