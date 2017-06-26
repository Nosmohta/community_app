import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'

class Subject extends Component {



  render () {
     const otherInput = <input type="text" name="question"></input>

    return (
             <div className="field">
               <p className="control">
                 <label className="radio">
                 <input type="radio" name="question"></input>
                  Tree
                 </label>
                 <label className="radio">
                 <input type="radio" name="question"></input>
                  Flowers
                 </label>
                  <label className="radio">
                 <input type="radio" name="question"></input>
                  Other
                 </label>
                 <div>{otherInput}</div>
                 </p>
               </div>

        )
  }
} export default Subject


