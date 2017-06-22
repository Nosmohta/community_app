import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Topic.css';
import Conversation from './Conversation.js';
import {Columns} from 'bulma-components'


class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  topics: [],
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
                 <div  onClick={(e) => this.props.attemptUpVote(a._id)} className="triangle-up"><span>{a.up_votes}</span></div>
              <div  onClick={this.handleDownVote} className="triangle-down"><span>{a.down_votes}</span></div>
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
  console.log('from Topics component ', state.topics)
    return { topics: state.topics };
}

const mapDispatchToProps = (dispatch) => {
  return{
    attemptUpVote: (id) => {
      dispatch({
        type: 'ATTEMPT_UP_VOTE',
        payload: {
          topic_id: id
        }
      })
    }
  }

};


export default connect(mapStateToProps, mapDispatchToProps)(Topics);
