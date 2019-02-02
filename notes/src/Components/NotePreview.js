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
      <p>{noteText !== undefined && noteText.length > 50 ? noteText.substring(0, 50) + '...' : noteText}</p>
      <p>{date}</p>
      <div className='note-preview-btn-container'>
        <span className='link icon-container'><ion-icon name="trash" onClick={handleDelete}></ion-icon></span>
        <span className='btn-action-container'>
          <Link className='link' to={`/notes/edit/${id}`}>
            <ion-icon name="create" onClick={handleEdit}></ion-icon>
          </Link>
          <Link className='link' to={`/note/${id}`}>
            <ion-icon name="eye" onClick={showNote}></ion-icon>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotePreview;
