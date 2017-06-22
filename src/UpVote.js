import {connect} from 'react-redux';
import React, {Component} from 'react';


class UpVote extends Component {

handleUpVote(e) {
  console.log(e.target)
}
  render () {

    const token = this.props.user.token
    const id = this.props._id
    console.log(id)
    return (

       <div onClick={(e) => this.props.attemptUpVote(id, token)} className="triangle-up"><span>{this.props.voteCount}</span></div>

      )
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log('from Topics component ', state.user)
    return {
      topics: state.topics,
      user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps')
  return{
    attemptUpVote: (id, token) => {
      dispatch({
        type: 'ATTEMPT_UP_VOTE',
        payload: {
          _id: id,
          token: token,
          up_vote: true
        }
      })
    }
  }


};

 export default connect(mapStateToProps, mapDispatchToProps)(UpVote)