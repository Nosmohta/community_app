import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Subject.css'
import {Container} from 'bulma-components';
import QuestionEnd from './Questions/QuestionEnd';
import QuestionComTag from './Questions/CommunityTags';


class Questions extends Component {


  render() {
    console.log(this.props.question.type)
    return (

      <div className="question">
        {{
          COMMUNITY_TAG: (
            <QuestionComTag question={this.props.question}/>
        ),
          END: (
            <QuestionEnd question={this.props.question}/>
        )}[this.props.question.type]}
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


export default connect(mapStateToProps, mapDispatchToProps)(Questions)