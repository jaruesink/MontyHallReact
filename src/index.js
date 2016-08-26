import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import App from './components/app';
import reducers from './reducers';

import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Login from './components/login'

require('../style/style.scss');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={App} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>, document.querySelector('#react-app')
);