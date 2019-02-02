import React from 'react';

const Note = ({ title, noteText, date, handleDelete, handleEdit }) => {
  return (
    <div className='main-noteID-container'>
      <h3>{title}</h3>
      <p>{noteText}</p>
      <p>{date}</p>
      <div className='noteID-btn-container'>
        <ion-icon className='icon-link' name="trash" onClick={handleDelete}></ion-icon> <ion-icon className='icon-link' name="create" onClick={handleEdit}></ion-icon>
      </div>
    </div>
  );
};

export default Note;
