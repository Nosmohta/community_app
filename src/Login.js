import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'


class Login extends Component {

  constructor(props) {
      super(props);
    this.state = {
                   firstname:'',
                   lastname:'',
                   email: '',
                   password:''
                 };

    this.handleEmail = this.handleEmail.bind(this);
     this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(event) {
    alert('A form was submitted: ' + this.state.email + ' '  + this.state.password);
    event.preventDefault();
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
    <h1 className="form-title">Community Login</h1>
      <p className="control">
        <input className="input"  value={this.state.email} onChange={this.handleEmail} type="text" placeholder="Email" ref="email"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input"  value={this.state.password} onChange={this.handlePassword} type="password" placeholder="Password" ref="password"/>
      </p>
      <br></br>
     <button className="button is-outlined is-large" type="submit" onClick={this.handleSubmit}>Login</button>
    </form>
    </Columns>
    );

}
}
export default Login;