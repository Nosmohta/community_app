import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Topic.css';
import Conversation from './Conversation.js';
import {Columns} from 'bulma-components'
import Topic from './Topic.js'

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  id: ''
                };
     this.handleDownVote = this.handleDownVote.bind(this);
  }


  handleUpVote (e) {
    console.log(e.target.class)
  }

  handleDownVote (e) {
    console.log(this.state)
  }


  componentWillReceiveProps(nextProps) {
    this.setState({topics: nextProps.topics});
  }

  render() {
    const topics = []
    Object.keys(this.props.topics).map((key) => {
       topics.push(this.props.topics[key])
    })
    const token = this.props.user.token
    const up = true
     const down = true


    return (

            <div className="container">
            <Conversation/>

            {topics.map((a) => {
              return (
            <div className="column topics-canvas">
            <div className="card">

            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{a.subject}</p>
                </div>
              </div>

              <div className="content">
                {a.description}
                <br></br>
                <small>11:09 PM - 1 Jan 2016</small>
                 <div  onClick={(e) => this.props.attemptVote(a._id, token)} className="triangle-up"><span>{a.up_votes}</span></div>
              <div  onClick={ (e) => this.props.attemptVote(a._id, token)} className="triangle-down"><span>{a.down_votes}</span></div>
              </div>
            </div>

          </div>
          </div>
          );
           })}
          </div>
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
  return{
    attemptVote: (id, token, down, up) => {
      console.log(up)
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


export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);

      // {this.props.topics.topics.map((topic) => <Topic topic={topic} key={topic._id} />)}