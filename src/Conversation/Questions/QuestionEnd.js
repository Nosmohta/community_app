import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Container} from 'bulma-components';


class QuestionEnd extends Component {

  render() {

    return (

      <div>
          <p className="thanks"> Thank you for contributing to your community! </p>
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


export default connect(mapStateToProps, mapDispatchToProps)(QuestionEnd)