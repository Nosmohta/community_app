import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Subject.css'
import {Container} from 'bulma-components';
import $ from "jquery";

class Subject extends Component {


  render() {

    return (
         <div>
          { this.props.conversations.questions &&
            <div>

            <p> Testing the questions comp... </p>
          </div>}
         </div>
     )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.conversations,
    token: state.user.token
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    subjectSubmit: (e , token, subject, conv_id) => {
      e.preventDefault();
      dispatch({
        type: 'SUBJECT_SUBMIT',
        payload: {
          subject: subject,
          token: token,
          conv_id: conv_id
        }
      })
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Subject)