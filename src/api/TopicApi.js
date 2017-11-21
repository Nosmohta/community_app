class TopicApi {
  static getAllTopics() {
    return fetch('https://community-up-api.herokuapp.com/api/topics').then(response => {
      console.log(response)
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default TopicApi;