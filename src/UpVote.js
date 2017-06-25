import {connect} from 'react-redux';
import React, {Component} from 'react';
import './Conversation/font-awesome-4.7.0/css/font-awesome.css'
import $ from "jquery";
import {loadTopics} from './actions/topicActions';


class UpVote extends Component {
  constructor(props) {
    super(props);
    this.state = {upVotes: this.props.topic.up_votes};
    this.handleUpVote = this.handleUpVote.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({upVotes: nextProps.topic.up_votes})
    }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

 handleUpVote(e) {
   const token = this.props.user.token;
   loadTopics(token);
   const messageClass = this.props.topic._id
   const arrowId = `up${messageClass}`
   if (!this.state.Vote) {

     $( `#${arrowId}` ).addClass( "voted" ).replaceWith(`<i class="fa fa-arrow-up fa-2x voted" id={arrowId} aria-hidden="true"></i>`);
   } else {
     $( `.${messageClass}` ).show();
   }
 }

  render () {
    const messageClass = this.props.topic._id
    const token = this.props.user.token
    const arrowId = `up${messageClass}`

    $(function() {
    $( `.${messageClass}` ).hide();
    });

    return (
        <div>
        <i className="fa fa-arrow-up fa-2x" id={arrowId} aria-hidden="true" onMouseDown={(e) => this.props.attemptUpVote(this.props.topic._id, token)} onMouseUp={this.handleUpVote}>
        </i><span className="upvoteCount">- {this.state.upVotes}</span>
        </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      topics: state.topics,
      user: state.user,
      votes: state.votes

    };
}

const mapDispatchToProps = (dispatch) => {
console.log('from dispatch ', this.state)
  return{
    attemptUpVote: (topic_id, token) => {
      dispatch({
        type: 'ATTEMPT_UP_VOTE',
        payload: {
          topic_id: topic_id,
          token: token,
          vote_up: true,
          vote_down: false
        }
      })
    }
  }


};

 export default connect(mapStateToProps, mapDispatchToProps)(UpVote)