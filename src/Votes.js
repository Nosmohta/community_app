import {connect} from 'react-redux';
import React, {Component} from 'react';
import './Conversation/font-awesome-4.7.0/css/font-awesome.css'
import $ from "jquery";
import {loadTopics} from './actions/topicActions';
import {attemptCancelUpVote} from './actions/voteActions'

class UpVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  upVotes: this.props.topic.up_votes,
                  downVotes: this.props.topic.down_votes,
                  vote_up: this.props.topic.vote_up,
                  vote_down: this.props.topic.vote_down
                 };
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleCancelUpVote = this.handleCancelUpVote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const token = this.props.user.token;
    this.setState({
                   upVotes: nextProps.topic.up_votes,
                   downVotes: nextProps.topic.down_votes,
                   vote_up: nextProps.topic.vote_up,
                   vote_down: nextProps.topic.vote_down
                  })
    }

  shouldComponentUpdate(nextProps, nextState) {

    return true

  }

   handleUpVote(e) {
     const voteId = this.props.topic._id

     $( `#up${voteId}` ).toggleClass( "voted" );
     $( `#down${voteId}` ).removeClass( "voted" );
    //  const token = this.props.user.token;
    //  let delayMillis = 3000; //1 second
    //  setTimeout(function() {
    // //your code to be executed after 1 second

    //  loadTopics(token);
    //  }, delayMillis);
    this.setState({
                    upVotes:(this.props.topics.up_votes - 1)
                    vote_up: true
                   })
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
            <div className="votes">
            <div>
            <i className="fa fa-arrow-up fa-2x voted" id={arrowId} aria-hidden="true"  onMouseUp={this.handleCancelUpVote}>
            </i><span className="upvoteCount">{this.state.upVotes}</span>
            </div>

            <div>
            <i className="fa fa-arrow-down fa-2x" id={arrowId} aria-hidden="true" onMouseDown={(e) => this.props.attemptDownVote(this.props.topic._id, token)} onMouseUp={this.handleDownVote}>
            </i><span className="downvoteCount">{this.state.downVotes}</span>
            </div>
            </div>
            )
      } else if (this.props.topic.vote_down) {
          return (
            <div className="votes">
            <div>
            <i className="fa fa-arrow-up fa-2x" id={arrowId} aria-hidden="true"  onMouseUp={this.handleCancelUpVote}>
            </i><span className="upvoteCount">{this.state.upVotes}</span>
            </div>

            <div>
            <i className="fa fa-arrow-down fa-2x" id={arrowId} aria-hidden="true" onMouseDown={(e) => this.props.attemptDownVote(this.props.topic._id, token)} onMouseUp={this.handleDownVote}>
            </i><span className="downvoteCount">{this.state.downVotes}</span>
            </div>
            </div>
            )
        }
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      topics: state.topics,
      user: state.user
    };
}



 export default connect(mapStateToProps)(UpVote)