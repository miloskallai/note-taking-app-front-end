import React from 'react';

const Input = ({ type, id, name, label, onChange }) => {
  return (
    <div className='input-container'>
      <input
        className='note-input'
        type={type}
        id={id}
        name={name}
        label={label}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
