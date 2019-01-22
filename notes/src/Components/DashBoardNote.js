import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardNote = ({ title, noteText, date, onClick, showNote, id }) => {
  return (
    <div className='main-note-container'>
      <h3>{title}</h3>
      <p>{noteText}</p>
      <p>{date}</p>
      <div className='note-btn-container'>
        <button onClick={onClick}>delete</button> <button>edit</button>
        <Link to={`/note/${id}`}>
          <button onClick={showNote}>show</button>
        </Link>
      </div>
    </div>
  );
};

export default DashBoardNote;
