import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const AppWithRouter = withRouter(App);

const app = (
  <Router>
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
