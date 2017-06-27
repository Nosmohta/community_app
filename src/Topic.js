import React, {Component} from 'react';
import UpVote from './UpVote.js'
import DownVote from './DownVote.js'

class Topic extends Component {


  render () {
    return (


            <div className="card topic-card">

            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{this.props.topic.subject}</p>
                </div>
              </div>

              <div className="content">
                 {this.props.topic.description}
                <br></br>
                <small>{this.props.topic.date_created}</small>
                <img className="topic-image" src={this.props.topic.img_path}></img>
                <div className="votes">
                <UpVote topic={this.props.topic} voteCount={this.props.topic.up_votes} />
                <DownVote topic={this.props.topic} voteCount={this.props.topic.down_votes} />
                </div>
              </div>
            </div>

          </div>

      )

 }

} export default Topic