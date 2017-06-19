import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {credentials: {email: '',password:''}};

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(event) {
    alert('A form was submitted: ' + this.state.credentials.email + ' '  + this.state.credentials.password);
    event.preventDefault();
  }

   handleEmail(event) {
    console.log(event.target.value)
    this.setState({credentials:{email: event.target.value}});
  }

  handlePassword(event) {
    console.log(event.target.value)
    this.setState({credentials:{password: event.target.value}});
  }


  render() {



  return (
    <Columns>
    <form className="register">
    <img className="logo" src="YourCityLogo.png" alt="Smiley face" height="150" width="150"/ >
    <h1 className="form-title">Community Login</h1>
      <p className="control">
        <input className="input"  value={this.state.credentials.email} onChange={this.handleEmail} type="text" placeholder="Email" ref="email"/>
      </p>
      <br></br>
      <p className="control">
        <input className="input"  value={this.state.credentials.password} onChange={this.handlePassword} type="password" placeholder="Password" ref="password"/>
      </p>
      <br></br>
     <button className="button is-outlined is-large" type="submit" onClick={this.handleSubmit}>Login</button>
    </form>
    </Columns>
    );
  }
}


export default Login;

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(sessionActions, dispatch)
//   };
// }
// export default connect(null, mapDispatchToProps)(Login);


