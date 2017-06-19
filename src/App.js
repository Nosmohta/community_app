import React, { Component } from 'react';
import Header from './Header.js';
import Register from './Register.js';
import Login from './Login.js';
import Home from './Home.js';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
 render() {
      return (
        <div>
           <Switch>
              <Route path='/home' component={Home}/>
             <Route path='/login' component={Login}/>
             <Route path='/register' component={Register}/>
            </Switch>
        </div>
      );
    }
  }
export default App;