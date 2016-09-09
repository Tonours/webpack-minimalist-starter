import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore } from 'redux';
import app from './reducers';
import { countIncrement } from './actions';
import { Provider } from 'react-redux';
// Components
import App from './components/app';

const store = createStore(app);

const node = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , node);
