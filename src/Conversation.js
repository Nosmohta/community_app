import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Conversation.css';
import {Columns} from 'bulma-components'
import UploadPhoto from './Conversation/UploadPhoto.js'
import Description from './Conversation/Description.js'
import Subject from './Conversation/Subject.js'
import Questions from './Conversation/Questions.js'
import { CSSTransitionGroup } from 'react-transition-group'

class Conversation extends Component {



  render() {

    return (
      <div className="conversation-container">

        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <UploadPhoto/>
        </CSSTransitionGroup>

        <Description/>

        { this.props.conversations.subject_guess_description &&
        <Subject/>}

        { this.props.conversations.questions &&
            <div className="">
              {this.props.conversations.questions.map((question, i) => <Questions question={question}  key={i} />)}
            </div>}


        {this.props.conversations.message &&
          <div className="modal is-active" >
            <div className="modal-background"></div>
            <div className="modal-content">
              <div className="notification is-primary">
                <button className="delete" onClick={ (e) => this.props.clearMessage(e)}></button>
                {this.props.conversations.message}
              </div>
            </div>
          </div>}



      </div>

    )

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.conversations
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    clearMessage: (e) => {
      e.preventDefault();
      dispatch({
        type: 'CLEAR_MESSAGE',
        payload: {
          message: '',
        }
      })
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Conversation)


