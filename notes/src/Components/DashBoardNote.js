import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardNote = ({
  title,
  noteText,
  date,
  handleDelete,
  handleEdit,
  showNote,
  id
}) => {
  return (
    <div className='main-note-container'>
      <h3>{title}</h3>
      <p>{noteText}</p>
      <p>{date}</p>
      <div className='note-btn-container'>
        <button onClick={handleDelete}>delete</button>
        <Link to={`/notes/edit/${id}`}>
          <button onClick={handleEdit}>edit</button>
        </Link>
        <Link to={`/note/${id}`}>
          <button onClick={showNote}>show</button>
        </Link>
      </div>
    </div>
  );
};

export default DashBoardNote;
