import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { Router, Route } from 'react-router-dom';
import './styles/styles.scss';
import App from './App';
import AddNote from './Components/AddNote';
import ShowNotes from './Components/ShowNotes';
import ShowNote from './Components/showNote';
import EditNote from './Components/EditNote';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={history}>
    <App>
      <Route exact path='/' component={ShowNotes} />
      <Route path='/new' component={AddNote} />
      <Route path='/note/:id' component={ShowNote} />
      <Route path='/notes/edit/:id' component={EditNote} />
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
