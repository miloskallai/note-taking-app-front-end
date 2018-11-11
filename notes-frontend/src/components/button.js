import React from 'react';

const Button = props => {
  return (
    <button style={props.style} className="button">
      {props.text}
    </button>
  );
};

export default Button;
