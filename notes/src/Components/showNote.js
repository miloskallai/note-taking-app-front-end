import React from 'react';

const ShowNote = ({ title, noteText }) => {
  return (
    <div className='single-note-container'>
      <h3>{title}</h3>
      <p>{noteText}</p>
    </div>
  );
};

export default ShowNote;
