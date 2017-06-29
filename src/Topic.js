import React, {Component} from 'react';
import Votes from './Votes.js'

class Topic extends Component {


  render () {
    return (


          <div className="card topic">
            <div className="card-content">

              <div className="media">
                <div className="media-content">
                <img className="topic-image" src={this.props.topic.img_path}></img>

                </div>
              </div>

              <div className="content">
               <p className="title is-4">{this.props.topic.subject}</p>
                 {this.props.topic.description}
                <br></br>
                <small>{this.props.topic.created_at}</small>

                <div className="votes">
                <Votes topic={this.props.topic} />

                </div>
              </div>

            </div>
          </div>
      )

 }

} export default Topic