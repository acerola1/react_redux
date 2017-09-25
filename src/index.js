// App Endpoint

/* eslint-disable import/default */

import 'babel-polyfill'; // Simplicity in transpiling ES6 gaps. Alternatively import separately (i.e. object.assign)
import React from 'react';
import { render } from 'react-dom'; // react-dom separated from Reac in React.14

// Dependencies for Router Props
import { Router, browserHistory } from 'react-router'; // Router Component handles routing. Use HTML5 Push State to handle browserHistory with clean URLs.
import routes from './routes';

// Style dependencies from App Endpoint
require('./favicon.ico'); // Webpack loads favicon.ico
import './styles/styles.css'; // Webpack imports Sass/CSS files. Webpack runs associated loader and embeds in page.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
