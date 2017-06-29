import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Subject.css'
import {Container} from 'bulma-components';
import $ from "jquery";

class Subject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
  }


  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    })

  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    console.log('You have selected:', this.state.selectedOption);
  }


  render () {

    return (
      <div className="subject ">
        <form onSubmit={this.handleFormSubmit}>

        { this.props.conversations.subject_guess_photo &&
        <div className="radio one">
          <label className="radio-label">
            <input type="radio" value={this.props.conversations.subject_guess_photo}
                   checked={this.state.selectedOption === this.props.conversations.subject_guess_photo}
                   onChange={(e) => this.handleOptionChange(e)} />
            <br/>
            {this.props.conversations.subject_guess_photo}
          </label>
        </div>}

        {this.props.conversations.subject_guess_description &&
        <div className="radio two">
          <label className="radio-label">
            <input type="radio" value={this.props.conversations.subject_guess_description}
                   checked={this.state.selectedOption === this.props.conversations.subject_guess_description}
                   onChange={ (e) => this.handleOptionChange(e)} />
            <br/>
            {this.props.conversations.subject_guess_description}
          </label>
        </div>}

        { (this.props.conversations.subject_guess_description) &&
        <div className="radio three">
          <label className="radio-label">
            <input type="radio" value={ $('#other').val() }
                   checked={this.state.selectedOption === $('#other').val() }
                   onChange={(e) => this.handleOptionChange(e)} />
            <br/>
            <input type="text" id="other" placeholder="other"/>
          </label>
        </div>}
      </form>

        { (this.state.selectedOption) &&
        <div className="block ">
          <a className="button is-large submit-topic"  onClick={ (e) => this.props.subjectSubmit(e, this.props.token , this.state.selectedOption , this.props.conversations.conv_id)}>Create Topic</a>
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


