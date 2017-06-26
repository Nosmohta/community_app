import {connect} from 'react-redux';
import React, {Component} from 'react';
import './Conversation/font-awesome-4.7.0/css/font-awesome.css'
import $ from "jquery";
import {loadTopics} from './actions/topicActions';


class DownVote extends Component {
  constructor(props) {
    super(props);
    this.state = {DownVotes: this.props.topic.down_votes, Vote: false};
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  componentWillReceiveProps(nextProps) {

    this.setState({DownVotes: nextProps.topic.down_votes})
  }
  shouldComponentUpdate(nextProps, nextState) {
      return true
  }

  handleDownVote(e) {
    const token = this.props.user.token;
    loadTopics(token);
    const messageClass = this.props.topic._id
    const arrowId = `${messageClass}`
     if (!this.state.Vote) {
       // this.setState({DownVotes: ++this.state.DownVotes, Vote: true})
       $( `#${arrowId}` ).addClass( "voted" ).replaceWith(`<i class="fa fa-arrow-down fa-2x voted" id={arrowId} aria-hidden="true"></i>`);
     } else {
       $( `.${messageClass}` ).show();
     }
   }

  render () {
    const messageClass = this.props.topic._id
    const token = this.props.user.token



    return (
        <div>
        <i className="fa fa-arrow-down fa-2x" id={this.props.topic._id} aria-hidden="true" onMouseDown={(e) => this.props.attemptDownVote(this.props.topic._id, token)} onMouseUp={this.handleDownVote}>
        </i><span className="downvoteCount">- {this.state.DownVotes}</span>
        </div>
      )

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    topics: state.topics,
    votes: state.votes
  };
}

const mapDispatchToProps = (dispatch) => {
console.log('from dispatch ', this.state)
  return{
    attemptDownVote: (topic_id, token) => {
      dispatch({
        type: 'ATTEMPT_DOWN_VOTE',
        payload: {
          topic_id: topic_id,
          token: token,
          vote_up: false,
          vote_down: true
        }
      })
    }
  }
};

 export default connect(mapStateToProps, mapDispatchToProps)(DownVote)