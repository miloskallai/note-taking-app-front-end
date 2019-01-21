import React from 'react';

const Note = ({ title, noteText, date }) => {
  return (
    <div className='main-note-container'>
      <h3>{title}</h3>
      <p>{noteText}</p>
      <p>{date}</p>
      <div className='note-btn-container'>
        <button>delete</button> <button>edit</button> <button>show</button>
      </div>
    </div>
  );
};

export default Note;
