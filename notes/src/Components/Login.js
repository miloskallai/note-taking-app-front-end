import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth.js';

const Login = ({startLogin}) => {

    return (
        <div className='login-container'>
      <div className='login'>
      <h1>Login</h1>
      <button onClick={startLogin}>Login with Google</button>
      </div>
       
      </div>
    );

}

const mapDispatchToProps = dispatch => ({
  startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(Login);