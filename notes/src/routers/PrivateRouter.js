import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ShowNotes from '../Components/ShowNotes';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div className='router-container'>
          <ShowNotes />
          <Component {...props} />{' '}
        </div>
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

const mapStateToprops = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToprops)(PrivateRoute);
