import TopicApi from '../api/TopicApi';
import store from '../index.js';
import querystring from 'querystring';


export function attemptUpVote(topic_id, token) {
  const data = querystring.stringify({'topic_id': topic_id, 'token': token, 'vote_up': true, 'vote_down': false});
  const request = new Request('http://localhost:8080/api/topics/' + topic_id  +'/vote', {
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
              data
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

export function attemptDownVote(topic_id, token) {
  const data = querystring.stringify({'topic_id': topic_id, 'token': token, 'vote_up': false, 'vote_down': true })
  const request = new Request('http://localhost:8080/api/topics/' + topic_id  +'/vote', {
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
          console.log("down vote success")
          store.dispatch({
            type: 'DOWN_VOTE_SUCCESS',
            payload: {
              //just a placeholder for payload now....will update when api route is finalized
              data
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          console.log("down vote fail")
          store.dispatch({
            type: 'DOWN_VOTE_FAIL',
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
