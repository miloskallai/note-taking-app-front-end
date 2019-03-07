import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {history} from './routers/AppRouter';
import {firebase} from './firebase/firebase.js';
import { startSetNoteData } from '../src/actions/index';
import { login, logout } from '../src/actions/auth';
import store from './store';


let hasRendered = false;
const renderApp = () => {
	if(!hasRendered){
		ReactDOM.render(<App />, document.getElementById('root'));
		hasRendered = true;
	}
}

ReactDOM.render(<p>Loading..</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		store.dispatch(login(user.uid));
		store.dispatch(startSetNoteData()).then(()=> {
			renderApp();
			if(history.location.pathname === '/'){
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp(); 
		history.push('/');
	}
});

serviceWorker.unregister();
