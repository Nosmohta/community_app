import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {Columns} from 'bulma-components'
import './UploadPhoto.css';


class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
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
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<div className="imagePreview"> <img src={imagePreviewUrl} /> </div>);
    } else {
      imagePreview = (<div></div>);
    }

    return (

         <div className="conversation">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput button" type="file" onChange={(e)=>this._handleImageChange(e)} />
          </form>
          <div>
           {imagePreview}
          </div>
          <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </div>
    )


  }
}

export default UploadPhoto;