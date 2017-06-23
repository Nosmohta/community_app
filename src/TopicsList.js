import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Topic.css';
import Conversation from './Conversation.js';
import {Columns} from 'bulma-components';
import Topic from './Topic.js';
import configureStore from './store/configStore';
import {loadTopics} from './actions/topicActions';





class TopicsList extends Component {

  componentDidMount () {
    const token = this.props.user.token;
    loadTopics(token);
  }

  constructor(props) {
    super(props);
    this.state = {
                  id: ''
                };

  }



  // componentWillReceiveProps(nextProps) {
  //   this.setState({topics: nextProps.topics});
  // }

  render() {
    // const topics = []
    // Object.keys(this.props.topics).map((key) => {
    //    topics.push(this.props.topics[key])
    // })

    console.log(this.props.topics)
    const topics = this.props.topics.topics
     if (topics) {
         return (
            <div>
              <div className="container">
              <Conversation/>
              <div className="column topics-canvas">
               {this.props.topics.topics.map((topic) => <Topic topic={topic} key={topic._id} />)}
              </div>
              </div>
            </div>
          )
        } else {
          return (
            <div><p></p></div>
            )
        }
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log('from TopicList component ', state.topics)
    return {
      topics: state.topics,
      user: state.user
    };
}

// const mapDispatchToProps = (dispatch) => {


// };


export default connect(mapStateToProps, null)(TopicsList);
