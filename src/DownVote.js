import {connect} from 'react-redux';
import React, {Component} from 'react';


class DownVote extends Component {
  render () {
    const token = this.props.user.token
  console.log('from down vote ', this.props)
    return (
       <div onClick={(e) => this.props.attemptDownVote(this.props.topic._id, token)}
        className="triangle-down"><span>{this.props.voteCount}</span></div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
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