import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
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
