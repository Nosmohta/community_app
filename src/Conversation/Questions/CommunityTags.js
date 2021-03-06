import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Container} from 'bulma-components';
import './Question.css'
import {loadTopics} from '../../actions/topicActions';

class QuestionComTag extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedOption: ''
    }
    this.handleNewTopic = this.handleNewTopic.bind(this);
  }

  handleNewTopic(e) {
    loadTopics(this.props.token)
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

  generateRadios(community, i){
    return (
      <div className="radio community" key={i}>
        <label className="community">
          <input type="radio" className="community" value={community}
            checked={this.state.selectedOption === community}
            onChange={(e) => this.handleOptionChange(e)} />
            <br/>
            {community}
        </label>
      </div>
    )
  }

  render() {

    return (
      <Container className="subject ">
        <div className="community">
        {this.props.question.payload.text}
        </div>
        <form className="community" onSubmit={this.handleFormSubmit}>
          {this.props.question.payload.user_communities.map( (community, i) => this.generateRadios(community, i) ) }
        </form>
        { (this.state.selectedOption) &&
        <div className="community submit">
          <a className="button is-large submit-topic"  onMouseDown={this.handleNewTopic} onClick={ (e) => this.props.answerSubmit(e, this.props.token , this.state.selectedOption , this.props.conversations.conv_id, this.props.question.type)}>Add your community tags</a>
        </div>}

      </Container>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.conversations,
    token: state.user.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    answerSubmit: (e , token, answer, conv_id, answer_type) => {
      e.preventDefault();
      dispatch({
        type: 'ANSWER_SUBMIT',
        payload: {
          answer: answer,
          token: token,
          conv_id: conv_id,
          answer_type: answer_type
        }
      })
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionComTag)