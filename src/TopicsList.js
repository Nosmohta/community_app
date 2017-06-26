import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Topic.css';
import './App.css'
import Conversation from './Conversation.js';
import {Columns} from 'bulma-components';
import Topic from './Topic.js';
import configureStore from './store/configStore';
import {loadTopics} from './actions/topicActions';
import {Link} from 'react-router-dom'
import Header from './Header.js';

class TopicsList extends Component {
  componentDidMount () {
    const token = this.props.user.token;
    loadTopics(token);
  }

  constructor(props) {
    super(props);
    this.state = {id: ''};
  }

  render() {

    console.log(this.props.topics)
    const topics = this.props.topics.topics
     if (topics) {
         return (

              <div className="container topics-page-canvas">

               <img className="logo" src="YourCityLogo.png" alt="Smiley face" height="150" width="150"/ >
               <h1 className="share">Share something with your Community !</h1>
               <h1 className="share arrow">&darr;</h1>
              <Conversation/>
              <div className="column topics-canvas">
               {this.props.topics.topics.map((topic) => <Topic topic={topic} key={topic._id} />)}
              </div>
              </div>

          )
        } else {
          return (
                  <Columns>
                  <form className="register">
                  <img className="logo" src="YourCityLogo.png" alt="Smiley face" height="150" width="150"/ >
                  <h1 className="form-title">Welcome to Community App</h1>
                    <br></br>
                    <p className="control">
                     <Link className="button is-outlined is-large" to='/register'>Sign Up!</Link>
                    </p>
                    <br></br>
                    <p className="home-form">or</p>
                    <br></br>
                    <Link className="button is-outlined is-large" to='/login'>Login</Link>
                  </form>
                 </Columns>
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
