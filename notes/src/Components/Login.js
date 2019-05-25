import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';

const Login = ({ startLogin }) => {
  return (
    <div className='login-container text-center bg-light'>
      <h1 className='text-dark display-1'>welcome to Notes</h1>
      <div className='card text-center rounded'>
        <div className='card-body'>
          <div className='h3 mb-3 font-weight-normal text-dark'>
            you need to sing in
          </div>
          <button
            className='btn btn-primary btn-lg btn-block'
            onClick={startLogin}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
