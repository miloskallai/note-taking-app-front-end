import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './firebase/firebase';
import {firebase} from './firebase/firebase.js';

ReactDOM.render(<App />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		console.log('log in');
	} else {
		console.log('log out');
	}
});

serviceWorker.unregister();
