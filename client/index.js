import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from 'components/app';
import reducers from 'reducers';
import startChat, {chatMiddleware} from './chat';

const initialState = window.INITIAL_STATE;
const createStoreWithMiddleware = applyMiddleware(chatMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers(initialState));

startChat(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
