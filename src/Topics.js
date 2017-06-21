import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Topic.css';
import Conversation from './Conversation.js';
import {Columns} from 'bulma-components'

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: [] };
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
                 <div className="triangle-up"><span>56</span></div>
              <div className="triangle-down"></div>
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

function mapStateToProps(state, ownProps) {
  console.log('from Topics component ', state.topics)
    return { topics: state.topics };
}
export default connect(mapStateToProps)(Topics);
