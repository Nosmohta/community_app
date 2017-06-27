import {connect} from 'react-redux';
import React, {Component} from 'react';
import './Conversation/font-awesome-4.7.0/css/font-awesome.css'
import $ from "jquery";
import {loadTopics} from './actions/topicActions';
import {attemptCancelUpVote} from './actions/voteActions'


class UpVote extends Component {
  constructor(props) {
    super(props);
    this.state = {upVotes: this.props.topic.up_votes};
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleCancelUpVote = this.handleCancelUpVote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const token = this.props.user.token;
    this.setState({upVotes: nextProps.topic.up_votes})
    }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('rerender upvotes ', nextProps)
    return true
  }

   handleUpVote(e) {
     const voteId = this.props.topic._id
     const arrowId = `up${voteId}`

     $( `#${arrowId}` ).toggleClass( "voted" );
     const token = this.props.user.token;
     let delayMillis = 3000; //1 second
     setTimeout(function() {
    //your code to be executed after 1 second

     loadTopics(token);
     }, delayMillis);

   }

   handleCancelUpVote (e) {
     const token = this.props.user.token;
     const voteId = this.props.topic._id
     const arrowId = `up${voteId}`

     attemptCancelUpVote(this.props.topic._id, token)

     $( `#${arrowId}` ).removeClass( "voted" );

     let delayMillis = 2000; //2 second
     setTimeout(function() {
    //loadtopics to be executed after 2 second
     loadTopics(token);
     }, delayMillis);

   }


  render () {
    const voteId = this.props.topic._id
    const token = this.props.user.token
    const arrowId = `up${voteId}`
     if (this.props.topic.vote_up) {
        return (
            <div>
            <i className="fa fa-arrow-up fa-2x voted" id={arrowId} aria-hidden="true"  onMouseUp={this.handleCancelUpVote}>
            </i><span className="upvoteCount">+{this.state.upVotes}</span>
            </div> )
      }else {
         return (
            <div>
            <i className="fa fa-arrow-up fa-2x" id={arrowId} aria-hidden="true" onMouseDown={(e) => this.props.attemptUpVote(this.props.topic._id, token)} onMouseUp={this.handleUpVote}>
            </i><span className="upvoteCount">+{this.state.upVotes}</span>
            </div> )

    }
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      topics: state.topics,
      user: state.user,
      upvotes: state.upvotes
    };
}

const mapDispatchToProps = (dispatch) => {

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