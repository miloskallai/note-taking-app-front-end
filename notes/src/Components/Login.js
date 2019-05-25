import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';

const Login = ({ startLogin }) => {
  return (
    <div className='login-container'>
      <div className='card text-center'>
        <div className='card-body'>
          <div className='card-title'>welcome to notes</div>
          <button className='btn btn-primary' onClick={startLogin}>
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
