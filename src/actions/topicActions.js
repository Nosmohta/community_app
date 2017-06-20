import TopicApi from '../api/TopicApi';

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
