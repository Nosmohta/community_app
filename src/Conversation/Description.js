import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'



class Description extends Component {

  render () {
    return (


          <div className="conversation">
          <br></br>
          <p className="control second-question">
            <label className="question">Describe your topic for us.</label>
            <input className="converssation-input"   type="text" placeholder="Describe your topic for us." ref="lastname"/>
          </p>
          </div>

        )
  }
} export default Description


