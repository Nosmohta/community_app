import React, {Component} from 'react';
import UpVote from './UpVote.js'
import DownVote from './DownVote.js'

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
                <small>{this.props.topic.date_created}</small>

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