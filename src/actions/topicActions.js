import TopicApi from '../api/TopicApi';
import store from '../index.js';
import querystring from 'querystring';


export function loadTopics() {
  return function(dispatch) {
    return TopicApi.getAllTopics().then(topics => {
      dispatch(loadTopicsSuccess(topics));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTopicsSuccess(topics) {
  console.log('from topicActions ', topics)
  return {type: 'LOAD_TOPICS_SUCCESS', payload: topics};
}

export function attemptUpVote(id) {

  const data = querystring.stringify({'_id': id, 'up_votes': true })
  const request = new Request('http://localhost:8080/votes', {
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
          console.log("action success")
          store.dispatch({
            type: 'UP_VOTE_SUCCESS',
            payload: {
              up_voted: true,
            }
          })
        })
      } else {
        response.json().then((data) => {
          console.log("action fail")
          store.dispatch({
            type: 'UP_VOTE_FAIL',
            payload: {
              up_voted: false,
              message: data.message,
            }
          })
        })
      }
    })
    .catch( err => console.log(err));

}
