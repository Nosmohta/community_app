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
    }
      this.onContent = this.onContent.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  onContent(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    const description = this.state.content
    if (this.props.conversations) {
    attemptAddDescription(description, this.props.conversations.conversations.img)
   }
  }


  render () {
    return (

  <div className="media-content">
    <div className="field">
      <p className="control">
        <textarea className="textarea" placeholder="Please describe your topic." defaultValue={this.state.content} onInput = {this.onContent}></textarea>
        {this.state.content && <button className="button submit-description" onClick={this.handleSubmit}>Submit</button>}
      </p>
    </div>
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


