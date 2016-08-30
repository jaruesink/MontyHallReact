import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';

import { Route, Router, IndexRoute, browserHistory } from 'react-router';

require('../style/style.scss');

ReactDOM.render(
  <Provider>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={App} />
      </Route>
    </Router>
  </Provider>, document.querySelector('#react-app')
);