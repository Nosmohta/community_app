export default {
  users: {
    token: localStorage.getItem('apiToken') ? localStorage.getItem('apiToken') : null,
    logged_in: localStorage.getItem('apiToken') ? true : false
  },
  topics: [],
  alert_message: '',
  logged_in: false,
  token:'',
  upvotes: [],
  downvotes: []
}
