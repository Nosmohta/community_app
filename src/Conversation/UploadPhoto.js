import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'
import './UploadPhoto.css';
import {attemptUpload} from '../actions/conversationActions';


class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    const token = this.props.user.token
    const img = this.state.file
    attemptUpload(img, token)
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
      imagePreview = (<div className="imagePreview"> <img src={imagePreviewUrl} /> </div>);
    } else {
      imagePreview = (<div></div>);
    }

    return (

         <div className="card photo-container">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput button is-white" type="file" onChange={(e)=>this.handleImageChange(e)} />
          <button className="button upload-file">Choose a photo</button>
          </form>
          <div>
           {imagePreview}
          </div>
          {this.state.file &&
          <button className="photoSubmit button" type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Photo</button> }
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