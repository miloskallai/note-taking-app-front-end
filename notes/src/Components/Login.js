import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='login-container'>
        <h1>Login</h1>
        <form className='login-form'>
          <label className='input-label' htmlFor='email'>
            email
          </label>
          <input
            className='note-input'
            type='text'
            id='email'
            name='email'
            label='email'
            //onChange={onChange}
            //value={titleValue}
          />
          <label className='input-label' htmlFor='password'>
            password
          </label>
          <input
            className='note-input'
            type='password'
            id='password'
            name='password'
            label='password'
            //onChange={onChange}
            //value={titleValue}
          />
          <button className='btn-login'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
