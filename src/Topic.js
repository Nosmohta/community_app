import React, {Component} from 'react';
import Votes from './Votes.js'
import hdate from 'human-date'
import Community from './Community.js'
import { CSSTransitionGroup } from 'react-transition-group'

class Topic extends Component {


  render () {
    return (

<CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>

          <div className="card topic">
            <div className="card-content">

              <div className="media">
                <div className="media-content">


                <img className="topic-image" src={this.props.topic.img_path}></img>
                 {this.props.topic.community_tags.map((tag) => <Community tag={tag} />)}
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
          </CSSTransitionGroup>
      )

 }

} export default Topic