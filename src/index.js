import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/App.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

unregister();
