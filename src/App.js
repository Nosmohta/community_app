import React, { Component } from 'react';
import Header from './Header.js';
import Login from './Login.js';
import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
 render() {
      return (
        <div>
          <Header></Header>
          <Login></Login>
        </div>
      );
    }
  }
export default App;