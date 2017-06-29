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
      show: false,
      char_count: 0,
      over_limit: 'counter under_limit'
    }
      this.onContent = this.onContent.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showDescription = this.showDescription.bind(this);
  }

  showDescription(e) {
    this.setState({show: true})
  }
  onContent(e) {
    this.setState({
      content: e.target.value,
      char_count: e.target.value.length,
      over_limit: (e.target.value.length > 250)? 'counter over_limit' : 'counter under_limit'
    });
    console.log(this.state.over_limit)
  }

  handleSubmit(e) {
    e.preventDefault();
    const description = this.state.content;
    const token = this.props.user.token;
    const conv_id = this.props.conversations.conv_id
    if(this.state.content.length >250) {
      console.log("dispatch message")
    } else {
      attemptAddDescription(token, description, conv_id)
    }
  }


  render () {

    if (this.state.show) {
    return (

      <div className="media-content description">
        <div className="field">
          <p className="control">
            <textarea autoFocus className="textarea" placeholder="Tell us about your community" defaultValue={this.state.content} onKeyUp={this.onContent}></textarea>
            <div  className={this.state.over_limit}> {this.state.char_count}/250 </div>

            {this.state.content && <button className="button submit-description" onClick={ (e) => this.handleSubmit(e)}>Submit</button>}
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


