import React from 'react';

const Input = ({ onChange, titleValue, textValue }) => {
  return (
    <div className='input-container'>
      <label className='input-label' htmlFor='note_title'>
        title
      </label>
      <input
        className='note-input'
        type='text'
        id='note_title'
        name='note_title'
        label='note_title'
        onChange={onChange}
        value={titleValue}
      />

      <label className='input-label' htmlFor='note_text'>
        note
      </label>
      <textarea
        onChange={onChange}
        label='note_text'
        id='note_text'
        name='note_text'
        value={textValue}
      />

      <div className='btn-container'>
        <button type='submit'>discard</button>
        <button>save</button>
      </div>
    </div>
  );
};

export default Input;
