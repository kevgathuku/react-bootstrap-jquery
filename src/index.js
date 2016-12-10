import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap JS relies on a global varaible.
// In ES6, all imports are hoisted to the top of the file
// so if we used `import` to import Bootstrap, it would
// execute earlier than we have assigned the global
// variable. This is why we have to use CommonJS require()
// here since it doesn't have the hoisting behavior.
window.jQuery = $;
require('bootstrap/dist/js/bootstrap.min.js');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
