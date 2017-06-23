import TopicApi from '../api/TopicApi';
import store from '../index.js';
import querystring from 'querystring';


export function attemptUpVote(topic_id, token) {
  //need to confirm this is the correct data that must be sent for the api request
  const data = querystring.stringify({'_id': topic_id, 'token': token, 'up_vote': true })
  const request = new Request('http://localhost:8080/api/vote', {
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
          console.log("up vote success")
          store.dispatch({
            type: 'UP_VOTE_SUCCESS',
            payload: {
              //just a placeholder for payload now....will update when api route is finalized
              up_voted: true,
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          console.log("up vote fail")
          store.dispatch({
            type: 'UP_VOTE_FAIL',
            payload: {
              message: data.message,
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
}

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
