import {connect} from 'react-redux';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './Conversation.css';
import {Columns} from 'bulma-components'


class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      first_answer: false
    };
this.handleFirstQuestion = this.handleFirstQuestion.bind(this)
  }


   handleFirstQuestion(e) {
    this.setState({first_answer: true})
    console.log(this.state)
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
    };

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }


    if (this.state.first_answer) {
    return (

         <div className="conversation">

          <br></br>
          <p className="control second-question">
            <label className="question">Describe your topic for us.</label>
            <input className="converssation-input"   type="text" placeholder="Describe your topic for us." ref="lastname"/>
          </p>
          <br></br>

          <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {imagePreview}
          </div>
          <button className="button is-outlined is-large" type="submit">Post to Community!</button>

          </div>
    )
    } else {
      return (<div>
        <p className="control first-question">
          <label className="question">Hi :) what's your topic?</label>
            <input className="conversation-input"  type="text" placeholder="Hi :) what's your topic?" ref="first-question"/>
              <a className="question-button" onClick={this.handleFirstQuestion}>Create Topic</a>
          </p>
          </div>)
    }
  }
}

export default Conversation;