import TopicApi from '../api/TopicApi';
import store from '../index.js';
import querystring from 'querystring';




export function loadTopics(token) {

  const data = querystring.stringify({'token': token })
  const request = new Request('http://localhost:8080/api/topics', {
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
          console.log("topic action success", data)
          store.dispatch({
            type: 'LOAD_TOPICS_SUCCESS',
            payload: {
              topics: data.topics
            }
          })
        })
      } else {
        response.json().then((data) => {
          console.log("Reg action fail")
          store.dispatch({
            type: 'LOAD_TOPICS_FAIL',
            payload: []
          })
        })
      }
    })
    .catch( err => console.log(err));

}
