import React from 'react';
import { Link } from 'react-router-dom';

const NotePreview = ({
  title,
  noteText,
  date,
  handleDelete,
  handleEdit,
  showNote,
  id
}) => {
  return (
    <div className='note-preview-container'>
      <h3 className='note-title'>{title}</h3>
      <p>{noteText}</p>
      <p>{date}</p>
      <div className='note-preview-btn-container'>
        <button className='btn btn__preview' onClick={handleDelete}>
          delete
        </button>
        <span className='btn-action-container'>
          <Link to={`/notes/edit/${id}`}>
            <button className='btn btn__preview' onClick={handleEdit}>
              edit
            </button>
          </Link>
          <Link to={`/note/${id}`}>
            <button className='btn btn__preview' onClick={showNote}>
              show
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotePreview;
