import {connect} from 'react-redux';
import React, {Component} from 'react';


class UpVote extends Component {


  render () {

    const token = this.props.user.token
    const id = this.props.topic._id
    console.log(this.props.topic)

    return (

       <div onClick={(e) => this.props.attemptUpVote(id, token)} className="triangle-up"><span>{this.props.voteCount}</span></div>

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