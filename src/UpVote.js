import {connect} from 'react-redux';
import React, {Component} from 'react';


class UpVote extends Component {

  render () {

    const token = this.props.user.token


    return (
       <div onClick={(e) => this.props.attemptUpVote(this.props.topic._id, token)}
        className="triangle-up"><span>{this.props.voteCount}</span></div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {

    return {
      //topics: state.topics,
      user: state.user
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