import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Description.css'
import './font-awesome-4.7.0/css/font-awesome.css'
import {TextField, Button, Icon} from 'bulma-components';



class Description extends Component {

  render () {
    return (

  <div className="media-content">
    <div className="field">
      <p className="control">
        <textarea className="textarea" placeholder="Please describe your topic."></textarea>

      </p>
    </div>
    </div>

        )
  }
} export default Description


