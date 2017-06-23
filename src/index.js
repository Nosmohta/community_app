import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.js'
import routes from './routes'
import {loadTopics} from './actions/topicActions';

const store = configureStore();
// store.dispatch(loadTopics());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App/></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

export default store