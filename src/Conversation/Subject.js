import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Subject.css'
import {Container} from 'bulma-components';
import $ from "jquery";

class Subject extends Component {

  handleOther(e) {
     $( '#other' ).show();
  }

  render () {
     const otherInput = <input type="text" name="question"></input>

     $(function() {
       $( '#other' ).hide();
     });

    return (
             <Container className="subject">
               <div>
                <label className="radio-label">
                  <input type="radio" className="option-input radio" name="example" checked />
                  Radio option
                </label>
                <label className="radio-label">
                  <input type="radio" className="option-input radio" name="example" />
                  Radio option
                </label>
                <label className="radio-label">
                  <input type="radio" className="option-input radio other"
                  name="example" onClick={this.handleOther} value="" />
                  Other Please
                </label>
                <br></br>
                <input type="text" id="other" placeholder="Enter a Subject"/>
              </div>
               </Container>

        )
  }
} export default Subject


