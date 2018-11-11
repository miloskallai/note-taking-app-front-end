import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';

const styles = {
  loginContainer: {
    backgroundColor: '#795fc8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    width: '200px',
    height: '50px',
    borderRadius: '30px',
    fontSize: '24px',
    color: 'white',
    backgroundColor: '#f2d242',
    fontFamily: 'Arvo, serif',
    margin: '70px'
  },
  logo: {
    color: 'white',
    marginBottom: '10px',
    fontFamily: 'Grand Hotel, cursive',
    fontSize: '130px',
    fontWeight: '400'
  }
};

const Login = () => {
  return (
    <div style={styles.loginContainer} className="login-container">
      <div style={styles.textContainer} className="text-container">
        <Logo style={styles.logo} />
        <Button style={styles.button} text={'Log in'} />
      </div>
    </div>
  );
};

export default Login;
