import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import $ from 'jquery';

window.jQuery = window.$ = $;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
