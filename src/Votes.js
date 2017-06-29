import {connect} from 'react-redux';
import React, {Component} from 'react';
import './Conversation/font-awesome-4.7.0/css/font-awesome.css'
import $ from "jquery";
import {loadTopics} from './actions/topicActions';
import {attemptCancelUpVote} from './actions/voteActions'
import {attemptUpVote} from './actions/voteActions'
import {attemptDownVote} from './actions/voteActions'
import {attemptCancelDownVote} from './actions/voteActions'


class UpVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  upVotes: this.props.topic.up_votes,
                  downVotes: this.props.topic.down_votes,
                  vote_up: this.props.topic.vote_up,
                  vote_down: this.props.topic.vote_down,
                  token: this.props.user.token,
                  id: this.props.topic._id
                 };
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleCancelUpVote = this.handleCancelUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleCancelDownVote = this.handleCancelDownVote.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log('votes will recieve', nextProps)
    const token = this.props.user.token;
    this.setState({
                   upVotes: nextProps.topic.up_votes,
                   downVotes: nextProps.topic.down_votes,
                   vote_up: nextProps.topic.vote_up,
                   vote_down: nextProps.topic.vote_down
                  })
    }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('votes should update', nextState)
    return true

  }

  handleUpVote(e) {
     const id = this.state.id
    const token = this.props.user.token;
    attemptUpVote(this.props.topic._id, token)
    this.setState({
                    upVotes: this.state.upVotes + 1,
                    vote_up: true,
                    vote_down: false
                   })

     if (this.state.vote_down) {
     this.setState({
                    downVotes:(this.state.downVotes - 1),
                    vote_down: false
                   })
     let delayMillis = 2000; //2 second
     setTimeout(function() {
     //loadtopics to be executed after 2 second
     attemptCancelDownVote(id, token)

     }, delayMillis);
   }
  }

  handleDownVote(e) {
      const id = this.state.id
    console.log("WHAT!!")
     const token = this.props.user.token;
     attemptDownVote(this.props.topic._id, token)
     this.setState({
                    downVotes: this.state.downVotes + 1,
                    vote_up: false,
                    vote_down: true
                   })
       if (this.state.vote_up) {
     this.setState({
                    upVotes:(this.state.upVotes - 1),
                    vote_up: false
                   })
     let delayMillis = 2000; //2 second
     setTimeout(function() {
     //loadtopics to be executed after 2 second
     attemptCancelUpVote(id, token)

     }, delayMillis);
    }
  }


   handleCancelUpVote (e) {
      const token = this.props.user.token;
     const id = this.state.id

     if (this.state.vote_up) {
     this.setState({
                    upVotes:(this.state.upVotes - 1),
                    vote_up: false
                   })
     let delayMillis = 2000; //2 second
     setTimeout(function() {
     //loadtopics to be executed after 2 second
     attemptCancelUpVote(id, token)

     }, delayMillis);
    }
   }

   handleCancelDownVote (e) {
     console.log('cancel down')
     const token = this.props.user.token;
     const id = this.state.id
      console.log(this.state)

     this.setState({
                    downVotes:(this.state.downVotes - 1),
                    vote_down: false
                   })
     let delayMillis = 2000; //2 second
     setTimeout(function() {
     //loadtopics to be executed after 2 second
     attemptCancelDownVote(id, token)

     }, delayMillis);

   }


  render () {
    const voteId = this.props.topic._id
    const token = this.props.user.token
    const arrowId = `up${voteId}`


    if (!this.state.vote_up && !this.state.vote_down) {
      return (


             <div className="votes">
            <div>
            <i className="fa fa-arrow-circle-o-up fa-2x" id={arrowId} aria-hidden="true"  onClick={this.handleUpVote}>
            </i><span className="upvoteCount">{this.state.upVotes}</span>
            </div>

            <div>
            <i className="fa fa-arrow-circle-o-down fa-2x" id={arrowId} aria-hidden="true" onClick={this.handleDownVote}>
            </i><span className="downvoteCount">{this.state.downVotes}</span>
            </div>
            </div>

        )
    }
   else if (this.state.vote_up && !this.state.vote_down) {
        return (



            <div className="votes">
            <div>
            <i className="fa fa-arrow-circle-o-up fa-2x voted" id={arrowId} aria-hidden="true"  onClick={this.handleCancelUpVote} >
            </i><span className="upvoteCount">{this.state.upVotes}</span>
            </div>

            <div>
            <i className="fa fa-arrow-circle-o-down fa-2x" id={arrowId} aria-hidden="true" onMouseDown={this.handleDownVote}  onMouseUp={this.handleCancelUpVote} >
            </i><span className="downvoteCount">{this.state.downVotes}</span>
            </div>
            </div>

        )
      }

    else  {
      return (
             <div className="votes">
            <div>
            <i className="fa fa-arrow-circle-o-up fa-2x" id={arrowId} aria-hidden="true"  onMouseDown={this.handleUpVote} onClick={this.handleCancelDownVote}>
            </i><span className="upvoteCount">{this.state.upVotes}</span>
            </div>

            <div>
            <i className="fa fa-arrow-circle-o-down fa-2x voted" id={arrowId} aria-hidden="true" onClick={this.handleCancelDownVote} >
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