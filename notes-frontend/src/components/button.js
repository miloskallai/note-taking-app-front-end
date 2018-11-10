import React from 'react';
import '../views/styles/login.css';

const Button = props => {
  return <button className="button">{props.text}</button>;
};

export default Button;
