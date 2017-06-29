import React, {Component} from 'react';
import Votes from './Votes.js'
import hdate from 'human-date'
import Community from './Community.js'
class Topic extends Component {


  render () {
    return (


          <div className="card topic">
            <div className="card-content">

              <div className="media">
                <div className="media-content">
                   {this.props.topic.community_tags.map((tag) => <Community tag={tag} />)}

                <img className="topic-image" src={this.props.topic.img_path}></img>

                </div>
              </div>

              <div className="content">
               <p className="title is-4">{this.props.topic.subject}</p>
                 <p className="description">{this.props.topic.description}</p>

                <small>{hdate.prettyPrint(this.props.topic.created_at)}</small>

                <div className="votes">
                <Votes topic={this.props.topic} />

                </div>
              </div>

            </div>
          </div>
      )

 }

} export default Topic