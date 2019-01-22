import React from 'react';

const Note = ({ title, noteText, date, onClick }) => {
  return (
    <div className='main-noteID-container'>
      <h3>{title}</h3>
      <p>{noteText}</p>
      <p>{date}</p>
      <div className='noteID-btn-container'>
        <button onClick={onClick}>delete</button> <button>edit</button>
      </div>
    </div>
  );
};

export default Note;
