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
              topic_id: topic_id,
              data: data
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
  console.log('attemptDownVote')
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

              topic_id: topic_id,
              data: data
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

export function attemptCancelDownVote(topic_id, token) {
  console.log('attempt Cancel Down Vote', store.getState().topics.topics)
  const topics = store.getState().topics.topics
  const data = querystring.stringify({'topic_id': topic_id, 'token': token, 'vote_up': false, 'vote_down': true })
  const request = new Request('http://localhost:8080/api/topics/' + topic_id  +'/cancel', {
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
          console.log("cancel down vote success")
          store.dispatch({
            type: 'CANCEL_DOWN_VOTE_SUCCESS',
            payload: {

              topic_id: topic_id,
              data: data,
              topics: topics
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          console.log("down vote fail")
          store.dispatch({
            type: 'CANCEL_DOWN_VOTE_FAIL',
            payload: {
              message: data.message,
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
}

export function attemptCancelUpVote(topic_id, token) {
  console.log('attempt Cancel Up Vote')
  const data = querystring.stringify({'topic_id': topic_id, 'token': token, 'vote_up': false, 'vote_down': true })
  const request = new Request('http://localhost:8080/api/topics/' + topic_id  +'/cancel', {
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
          console.log("cancel up vote success")
          store.dispatch({
            type: 'CANCEL_UP_VOTE_SUCCESS',
            payload: {

              topic_id: topic_id,
              data: data
            }
          })
        })
      } else {
        console.log(response)
        response.json().then((data) => {
          console.log("down vote fail")
          store.dispatch({
            type: 'CANCEL_UP_VOTE_FAIL',
            payload: {
              message: data.message,
            }
          })
        })
      }
    })
    .catch( err => console.log(err));
}

export function loadUpVotes (topic) {
  store.dispatch({type: 'LOAD_UP_VOTES',payload: topic })
}

// export function loadDownVotes {
//   store.dispatch({type: 'LOAD_DOWN_VOTES',payload: {message: data.message,
//             }
//           })
// }