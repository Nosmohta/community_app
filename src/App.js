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
         <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/topics' component={Topics}/>
            <Route path='/register' render={() =>
              (this.props.logged_in ? ( <Redirect to="/topics"/>) : (<Register/>))}/>
            <Route exact path="/login" render={() =>
               (this.props.logged_in ? ( <Redirect to="/topics"/>) : (<Login/>))}/>
         </Switch>
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

