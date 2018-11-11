import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
