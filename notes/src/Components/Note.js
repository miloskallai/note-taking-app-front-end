import React from 'react';
import { Link } from 'react-router-dom';

const Note = ({
  id,
  note_title,
  note_text,
  date,
  handleDelete,
  handleEdit
}) => {
  return (
    <div className='main-noteID-container text-dark'>
      <h3>{note_title}</h3>
      <p className='note-text'>{note_text}</p>
      <p className='date-container'>{date}</p>
      <div className='noteID-btn-container'>
        <span className='link btn-icon icon-container'>
          <ion-icon name='trash' onClick={handleDelete} />{' '}
        </span>
        <Link className='edit link' to={`/notes/edit/${id}`}>
          <ion-icon name='create' onClick={handleEdit} />
        </Link>
      </div>
    </div>
  );
};

export default Note;
