import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Subject.css'
import {Container} from 'bulma-components';
import $ from "jquery";

class Subject extends Component {





  handleOther(e) {
    //e.preventDefault()
    $( '#other' ).show();
  }

  render () {
   const otherInput = <input type="text" name="question"></input>

   $(function() { $( '#other' ).hide() });

    return (

      <Container className="subject">
        <form className="select-subject is-centered">
       { this.props.conversations.subject_guess_photo &&
        <label className="radio-label">
          <input type="radio" className="option-input radio" name="example" />
          {this.props.conversations.subject_guess_photo}
        </label> }



       { this.props.conversations.subject_guess_description &&
        <label className="radio-label">
          <input type="radio" className="option-input radio" name="example" />
          {this.props.conversations.subject_guess_description}
        </label> }



       { (this.props.conversations.subject_guess_description || this.props.conversations.subject_guess_photo) &&

       <label className="radio-label">
          <input type="radio" className="option-input radio other"
          name="example" onClick={ (e) => this.handleOther(e)} value="" />
          Other
        </label>}


        <input type="text" id="other" placeholder="Enter a Subject"/>


        { (this.props.conversations.subject_guess_description || this.props.conversations.subject_guess_photo) &&
          <div className="block">
            <a className="button is-large submit-topic"  onClick={ (e) => this.props.subjectSubmit(e, this.props.token ,"Dumb subject")}>Create Topic</a>
          </div>
        }
       </form>
      </Container>

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
    subjectSubmit: (e , token, subject) => {
      e.preventDefault();
      dispatch({
        type: 'SUBJECT_SUBMIT',
        payload: {
          subject: subject,
          token: token
        }
      })
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Subject)


