import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'


class Register extends Component {
  constructor(props) {
      super(props);
    this.state = {
                   firstname:'',
                   lastname:'',
                   email: '',
                   password:''
                 };
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
     this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(event) {
    alert('A form was submitted: ' + this.state.email + ' ' + this.state.lastname + ' ' + this.state.firstname);
    event.preventDefault();
  }

  handleFirstname(event) {
    console.log(event.target.value)
    this.setState({firstname: event.target.value});
  }

   handleLastname(event) {
    console.log(event.target.value)
    this.setState({lastname: event.target.value});
  }

   handleEmail(event) {
    console.log(event.target.value)
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    console.log(event.target.value)
    this.setState({password: event.target.value});
  }

  render() {

  return (

    <Columns>
    <form className="register">
    <img className="logo" src="YourCityLogo.png" alt="Smiley face" height="150" width="150"/ >
    <h1 className="form-title">Community Sign Up!</h1>
    <br></br>
       <p className="control">
        <input className="input"  value={this.state.firstname} onChange={this.handleFirstname}type="text" placeholder="First Name" ref="firstame"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input"  value={this.state.lastname}  onChange={this.handleLastname}type="text" placeholder="Last Name" ref="lastname"/>
      </p>
       <br></br>
      <p className="control">
        <input className="input"  value={this.state.email} onChange={this.handleEmail} type="text" placeholder="Email" ref="email"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input"  value={this.state.password} onChange={this.handlePassword} type="password" placeholder="Password" ref="password"/>
      </p>
      <br></br>
      <button className="button is-outlined is-large" type="submit" onClick={this.handleSubmit}>Join the Community!</button>
    </form>
    </Columns>
    );
  }
}

export default Register;