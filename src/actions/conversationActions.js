import store from '../index.js';
import querystring from 'querystring';
const crypto = require("crypto");

//function called from UploadPhoto component
export function attemptUpload(img, token) {
  console.log('attempt upload ', img + token)
  const data = querystring.stringify({'token': token, 'IMG': img });
  const conversation_id = crypto.randomBytes(5).toString('hex');
  const request = new Request('http://localhost:8080/api/conversations/' + conversation_id + '/photo', {
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
          console.log("upload success")
          store.dispatch({
            type: 'UPLOAD_SUCCESS',
            payload: {
              //just a placeholder for payload now....will update when api route is finalized
              data
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



export function attemptAddDescription(token, description) {
  console.log('attempt add description ', description + token)
  const data = querystring.stringify({'token': token, 'Description': description });
  const conversation_id = crypto.randomBytes(5).toString('hex');
  const request = new Request('http://localhost:8080/api/conversations/' + conversation_id + '/photo', {
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
          console.log("upload success")
          store.dispatch({
            type: 'DESCRIPTION_SUCCESS',
            payload: {
              //just a placeholder for payload now....will update when api route is finalized
              data
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          console.log("upload fail")
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

export function attemptAddSubject(token, subject) {
  console.log('attempt add subject ', subject + token)
  const data = querystring.stringify({'token': token, 'Subject': subject });
  const conversation_id = crypto.randomBytes(5).toString('hex');
  const request = new Request('http://localhost:8080/api/conversations/' + conversation_id + '/photo', {
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
          console.log("upload success")
          store.dispatch({
            type: 'SUBJECT_SUCCESS',
            payload: {
              //just a placeholder for payload now....will update when api route is finalized
              data
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          console.log("upload fail")
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
