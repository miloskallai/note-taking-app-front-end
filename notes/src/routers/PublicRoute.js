import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? <Redirect to='/dashboard' /> : <Component {...props} />
    }
  />
);

const mapStateToprops = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToprops)(PublicRoute);
