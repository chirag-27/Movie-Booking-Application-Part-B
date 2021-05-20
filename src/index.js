import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
//import Controller from './screens/Controller';
import Home from './screens/home/Home.js';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
