import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'
import './UploadPhoto.css';
import {attemptUpload} from '../actions/conversationActions';
import request from 'superagent';
import cloudinary from 'cloudinary';
import $ from "jquery";

const CLOUDINARY_UPLOAD_PRESET = 'lxgfr9q6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/lyvtg7cjl/image/upload';

class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      uploadedFileCloudinaryUrl: '',
      pending: false
    };
  }


  componentWillReceiveProps(nextProps) {
    console.log('')
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleImageUpload(this.state.file)
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
        this.setState({
        uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }


  handleImageChange(e) {
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
  }


  render() {
    console.log(this.props)
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<div className="imagePreview image"> <img src={imagePreviewUrl} /> </div>);
    } else {
      imagePreview = (<div></div>);
    }

    return (

         <div className="card photo-container">
          <form>
          <input className="fileInput button is-white" type="file" onChange={(e)=>this.handleImageChange(e)} />
          <button className="button upload-file">Choose a photo</button>
          </form>
          <div>
           {imagePreview}
          </div>
          {this.state.file && <button className="photoSubmit button" type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Photo</button> }
          </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('from TopicList component ', state.topics)
    return {
      topics: state.topics,
      user: state.user
    };
}


export default connect(mapStateToProps)(UploadPhoto)