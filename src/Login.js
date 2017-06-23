import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components';
import {connect} from 'react-redux';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
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
       <button className="button is-outlined is-large" type="submit" onClick={(e) => this.props.attemptLogin(this.state.email, this.state.password, e)}>Login</button>
      </form>
      </Columns>
    );
  }
};


const mapStateToProps = (state, ownProps) => {
  return {
    email: "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    attemptLogin: (email, password, e) => {
      e.preventDefault();
      dispatch({
        type: 'ATTEMPT_LOGIN',
        payload: {
          email: email,
          password: password
        }
      })
    }
  }

};


export default connect( mapStateToProps, mapDispatchToProps)(Login);
