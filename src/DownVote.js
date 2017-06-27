import {connect} from 'react-redux';
import React, {Component} from 'react';
import './Conversation/font-awesome-4.7.0/css/font-awesome.css'
import $ from "jquery";
import {loadTopics} from './actions/topicActions';
import {attemptCancelDownVote} from './actions/voteActions';

class DownVote extends Component {
  constructor(props) {
    super(props);
    this.state = {DownVotes: this.props.topic.down_votes, Vote: false};
    this.handleDownVote = this.handleDownVote.bind(this)
    this.handleCancelVote = this.handleCancelVote.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({DownVotes: nextProps.topic.down_votes})
  }

  shouldComponentUpdate(nextProps, nextState) {
      return true
  }

  handleDownVote(e) {
     const voteId = this.props.topic._id
     const arrowId = `down${voteId}`
     const token = this.props.user.token;
     $( `#${arrowId}` ).toggleClass( "voted" );

     let delayMillis = 3000; //1 second
     setTimeout(function() {
    //your code to be executed after 1 second
     loadTopics(token);
     }, delayMillis);
   }

   handleCancelVote(e) {
    const token = this.props.user.token;
    attemptCancelDownVote(this.props.topic._id, token)
    const voteId = this.props.topic._id
    const arrowId = `down${voteId}`

    $( `#${arrowId}` ).removeClass( "voted" );

    let delayMillis = 3000; //1 second
     setTimeout(function() {
    //your code to be executed after 1 second

     loadTopics(token);
     }, delayMillis);
   }

  render () {
    const voteId = this.props.topic._id
    const token = this.props.user.token
    const arrowId = `down${voteId}`


  if (this.props.topic.vote_down) {
        return (
            <div>
            <i className="fa fa-arrow-down fa-2x voted" id={arrowId} aria-hidden="true" onMouseUp={this.handleCancelVote}>
            </i><span className="downvoteCount">-{this.state.DownVotes}</span>
            </div> )
      }else {
         return (
            <div>
            <i className="fa fa-arrow-down fa-2x" id={arrowId} aria-hidden="true" onMouseDown={(e) => this.props.attemptDownVote(this.props.topic._id, token)} onMouseUp={this.handleDownVote}>
            </i><span className="downvoteCount">-{this.state.DownVotes}</span>
            </div> )

    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    topics: state.topics,
    downvotes: state.downvotes
  };
}

const mapDispatchToProps = (dispatch) => {

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