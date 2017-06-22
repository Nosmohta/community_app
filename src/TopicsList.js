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



    return (
            <div>
              <div className="container">
              <Conversation/>
              <div className="column topics-canvas">
               {topics.map((topic) => <Topic topic={topic} key={topic._id} />)}
              </div>
              </div>
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




export default connect(mapStateToProps)(TopicsList);
