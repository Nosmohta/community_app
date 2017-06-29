import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Description.css'
import './font-awesome-4.7.0/css/font-awesome.css'
import {TextField, Button, Icon} from 'bulma-components';
import {attemptAddDescription} from '../actions/conversationActions'



class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      show: false
    }
      this.onContent = this.onContent.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showDescription = this.showDescription.bind(this);
  }

  showDescription(e) {
    this.setState({show: true})
  }
  onContent(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const description = this.state.content;
    const token = this.props.user.token;
    const conv_id = this.props.conversations.conv_id
    console.log(token)
    attemptAddDescription(token, description, conv_id)
  }


  render () {

    if (this.state.show) {
    return (

      <div className="media-content description">
        <div className="field">
          <p className="control">
            <textarea className="textarea" placeholder="Please describe your topic." defaultValue={this.state.content} onInput = {this.onContent}></textarea>
            {this.state.content && <button className="button submit-description" onClick={this.handleSubmit}>Submit</button>}
          </p>
        </div>
        </div>

        )
  }
    return (
      <div>
      <i className="fa fa-pencil fa-5x" aria-hidden="true" onClick={this.showDescription}></i>
      <p className="description-prompt">Start a conversation with your community</p>
      </div>
)
  }


}
const mapStateToProps = (state, ownProps) => {
    return {
      topics: state.topics,
      user: state.user,
      conversations: state.conversations
    };
}


 export default connect(mapStateToProps)(Description)


