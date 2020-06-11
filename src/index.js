import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/reducers';

import 'antd/dist/antd.css';
import './index.scss';
import App from './components/app/app';

const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
