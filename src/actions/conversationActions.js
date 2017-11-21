import store from '../index.js';
import querystring from 'querystring';
const crypto = require("crypto");

//function called from UploadPhoto component
export function attemptUpload(img, token, conv_id) {
  console.log("attempting upload function: ", img)
  const data = querystring.stringify({'token': token, 'img': img , 'conv_id': conv_id});
  const file = img
  console.log('attempt upload ', data);
  const request = new Request('https://community-up-api.herokuapp.com/upload/conversations/photo', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: data,
    file: file
  });
  fetch(request)
    .then((response) => {
      if(response.ok) {
        response.json().then((data) => {
          console.log("upload success")
          store.dispatch({
            type: 'UPLOAD_SUCCESS',
            payload: {
              conv_id: data.conv_id,
              pending_photo: false,
              subject_guess_photo: data.subject_guess_photo,
              message: ''
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          console.log("upload fail")
          store.dispatch({
            type: 'UPLOAD_FAIL',
            payload: {
              message: data.message,
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
}



export function attemptAddDescription(token, description, conv_id) {

  const data = querystring.stringify({'token': token, 'description': description, 'conv_id': conv_id });
  const request = new Request('https://community-up-api.herokuapp.com/api/conversations/description', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: data
  });
  fetch(request)
    .then((response) => {
      if(response.ok) {
        response.json().then((data) => {
          store.dispatch({
            type: 'DESCRIPTION_SUCCESS',
            payload: {
              conv_id: data.conv_id,
              pending_desc: false,
              subject_guess_description: data.subject_guess_description,
              message: '',
              subject_visible: true,
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          store.dispatch({
            type: 'DESCRIPTION_FAIL',
            payload: {
              message: data.message,
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
 }


export function submitSubject(token, subject, conv_id) {
  console.log('attempt add subject ', subject + token)
  const data = querystring.stringify({'token': token, 'subject': subject, 'conv_id':conv_id });
  const request = new Request('https://community-up-api.herokuapp.com/api/conversations/subject', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: data
  });

  fetch(request)
    .then((response) => {
      if(response.ok) {
        response.json().then((data) => {
          console.log("upload success");
          console.log(store.conversations)
          store.dispatch({
            type: 'SUBJECT_SUCCESS',
            payload: {
              question: data.question,
              newTopic: data.newTopic
            }
          })
        })
      } else {
        console.log(response);
        response.json().then((data) => {
          console.log("upload fail");
          store.dispatch({
            type: 'SUBJECT_FAIL',
            payload: {
              message: data.message,
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
}


export function submitAnswer(token, answer, conv_id, answer_type) {
  const data = querystring.stringify({'token': token, 'answer': answer, 'conv_id':conv_id, 'answer_type': answer_type });
  const request = new Request('https://community-up-api.herokuapp.com/api/conversations/answer', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: data
  });

  fetch(request)
    .then((response) => {
      if(response.ok) {
        response.json().then((data) => {
          store.dispatch({
            type: 'ANSWER_SUCCESS',
            payload: {
              question: data.question
            }
          })
        })
      } else {
        console.log(response);
        response.json().then((data) => {
          console.log("upload fail");
          store.dispatch({
            type: 'ANSWER_FAIL',
            payload: {
              message: data.message
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
}

export function photoPending () {
  console.log('photo pending action')
     store.dispatch({type:'PHOTO_PENDING', payload: {pending_photo: true}})
}