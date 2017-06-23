import React, {Component} from 'react';
import UpVote from './UpVote.js'


class Topic extends Component {


  render () {
    return (


            <div className="card">

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
                <UpVote voteCount={this.props.topic.up_votes} />
              <div  className="triangle-down"><span></span></div>
              </div>
            </div>

          </div>

      )

 }

} export default Topic