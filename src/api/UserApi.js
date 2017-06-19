class UserApi {
  static getAllUsers() {
    return fetch('http://localhost:8080/api/users').then(response => {
      console.log(response)
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default UserApi;