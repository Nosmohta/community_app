import {connect} from 'react-redux';
import React, { Component } from 'react';
import Register from './Register.js';
import Login from './Login.js';
import Topics from './TopicsList.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.css'



class App extends Component {

 render() {
    return (
      <Router>
        <div className="App">
          {this.props.logged_in && (
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route exact path="/topics" component={Topics} />
              <Redirect from="/login" to="/topics" />
              <Redirect from="/signup" to="/topics" />
            </Switch>
          )}
          {!this.props.logged_in && (
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/register' component={Register} />
              <Route exact path="/login" component={Login} />
              <Redirect from="/topics" to="/" />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.user.logged_in
  };
};


export default connect(mapStateToProps)(App)
