import React from 'react';
import Button from '../components/button';
import Logo from '../components/logo';
import '../views/styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="text-container">
        <Logo className="logo" />
        <Button text={'Log in'} />
      </div>
    </div>
  );
};

export default Login;
