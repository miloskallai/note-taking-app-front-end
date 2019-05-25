import React from 'react';
import { Link } from 'react-router-dom';
import { startDeleteNote, showNote } from '../actions/index';
import { connect } from 'react-redux';

const NotePreview = ({
  note_title,
  note_text,
  date,
  id,
  startDeleteNote,
  showNote
}) => {
  return (
    <div className='card text-dark mb-3'>
      <div className='card-body'>
        <h3 className='card-title'>{note_title}</h3>
        <div className='card-text'>
          {note_text !== undefined && note_text.length > 50
            ? note_text.substring(0, 50) + '...'
            : note_text}
        </div>
        <p className='date-container'>{date}</p>
        <div className='note-preview-btn-container'>
          <span className='card-link icon-container'>
            <ion-icon name='trash' onClick={() => startDeleteNote(id)} />
          </span>
          <span className='btn-action-container'>
            <Link className='edit card-link' to={`/notes/edit/${id}`}>
              <ion-icon
                name='create'
                onClick={() => showNote(id, note_title, note_text, date)}
              />
            </Link>
            <Link className='card-link' to={`/note/${id}`}>
              <ion-icon
                name='eye'
                onClick={() => showNote(id, note_title, note_text, date)}
              />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startDeleteNote: id => dispatch(startDeleteNote(id)),
  showNote: (id, note_title, note_text, date) =>
    dispatch(showNote(id, note_title, note_text, date))
});

const mapStateToProps = state => {
  return {
    notes: state.notes,
    filters: state.filters
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePreview);
