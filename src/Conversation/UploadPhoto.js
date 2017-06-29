import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import {Columns} from 'bulma-components';
import './UploadPhoto.css';
import {attemptUpload} from '../actions/conversationActions';
import request from 'superagent';
import cloudinary from 'cloudinary';
import $ from "jquery";
import { CSSTransitionGroup } from 'react-transition-group';
import './font-awesome-4.7.0/css/font-awesome.css';
import {photoPending} from '../actions/conversationActions';

const CLOUDINARY_UPLOAD_PRESET = 'lxgfr9q6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/lyvtg7cjl/image/upload/';

class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      uploadedFileCloudinaryUrl: '',
      pending: false,
      show: false
    };
    this.showUploadPhoto = this.showUploadPhoto.bind(this);
  }

  showUploadPhoto(e) {
    this.setState({show: true})
  }

  handleSubmit(e) {
    e.preventDefault();


  }

//upload photo to cloudinary and get the url
  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        console.log(response.body.secure_url);
        //call function that sends image to server with image url and token as arguments
        const token = this.props.user.token;
        const conversation_id_state = this.props.user.conversation_id_prime;
        attemptUpload(response.body.secure_url, token, conversation_id_state);
      }
    });
  }


  handleImageChange(e) {
    //preview image and call image uplaod function
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
    this.handleImageUpload(file)
    photoPending()
  }


  render() {
    console.log(this.props)
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<div className="imagePreview image"> <img className="imagePreview" src={imagePreviewUrl} /> </div>);
    } else {
      imagePreview = (<div className="imagePreview image"><i className="fa fa-picture-o fa-5x" aria-hidden="true"></i></div>);
    }

    console.log(this.props.conversations);


    if (this.state.show) {
    return (

         <div className="card photo-container">

          <form>
          <input className="fileInput button is-white" type="file" onChange={(e)=>this.handleImageChange(e)} />
          {!this.state.file && <button className="button upload-file">Choose a Photo</button> }
          {this.state.file && !this.props.conversations.pending_photo && <button className="button upload-file">Change Photo</button> || this.props.conversations.pending_photo && <a className="button is-loading"></a>}
          </form>
           {imagePreview}
          </div>
    )
    } else {
      return (
         <div>
          <i className="fa fa-picture-o fa-5x" aria-hidden="true" onClick={this.showUploadPhoto}></i>
          <p className="photo-prompt">Have a photo to share?</p>
          <br></br>
         </div>
        )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('from TopicList component ', state.topics)
    return {
      topics: state.topics,
      user: state.user,
      conversations: state.conversations
    };
}



export default connect(mapStateToProps)(UploadPhoto)