import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/Login';
import MyNotes from '../views/MyNotes';
import SharedNotes from '../views/SharedNotes';
import NewNote from '../views/NewNote';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/mynotes" component={MyNotes} />
      <Route path="/sharednotes" component={SharedNotes} />
      <Route path="/newnote" component={NewNote} />
    </Switch>
  </BrowserRouter>
);

export default Router;
