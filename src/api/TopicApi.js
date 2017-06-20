class TopicApi {
  static getAllTopics() {
    return fetch('http://localhost:8080/api/topics').then(response => {
      console.log(response)
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default TopicApi;