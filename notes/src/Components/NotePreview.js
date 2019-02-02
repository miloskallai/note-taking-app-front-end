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
        <ion-icon className='icon-link' name="trash" onClick={handleDelete}></ion-icon>
        <span className='btn-action-container'>
          <Link to={`/notes/edit/${id}`}>
            <ion-icon className='icon-link' name="create" onClick={handleEdit}></ion-icon>
          </Link>
          <Link to={`/note/${id}`}>
            <ion-icon className='icon-link' name="eye" onClick={showNote}></ion-icon>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotePreview;
