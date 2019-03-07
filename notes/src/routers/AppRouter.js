import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddNote from '../Components/AddNote';

import ShowNote from '../Components/showNote';
import EditNote from '../Components/EditNote';
import NotFound from '../Components/NotFound';
import Welcome from '../Components/Welcome';
import Login from '../Components/Login';
import { Provider } from 'react-redux';
import store from '../store';
import PrivateRouter from './PrivateRouter';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <div className='router-container'>
        <Switch>
          <PublicRoute path='/' exact={true} component={Login} />
          <PrivateRouter path='/dashboard' component={Welcome} />
          <PrivateRouter path='/note/:id' component={ShowNote} />
          <PrivateRouter path='/notes/edit/:id' component={EditNote} />
          <PrivateRouter path='/new' component={AddNote} />
          <PublicRoute component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
