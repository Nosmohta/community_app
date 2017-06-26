import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Conversation.css';
import {Columns} from 'bulma-components'
import UploadPhoto from './Conversation/UploadPhoto.js'
import Description from './Conversation/Description.js'
import Subject from './Conversation/Subject.js'

class Conversation extends Component {



  render() {

    return (
      <div className="conversation-container">
        <UploadPhoto/>
        <Description/>
        <Subject/>
      </div>
    )


  }
}

export default Conversation;