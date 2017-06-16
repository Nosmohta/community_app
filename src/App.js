import React, { Component } from 'react';
import Header from './Header.js';
import Register from './Register.js';
import Login from './Login.js';
import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
 render() {
      return (
        <div>
          <Header></Header>
          <Login></Login>
          <Register></Register>
        </div>
      );
    }
  }
export default App;