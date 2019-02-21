import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { startDeleteNote, showNote } from '../actions/index';

const ShowNote = props => {
  const note = props.notes.filter(note => note.id === props.filters.id);

  return (
    <div className='single-note-container'>
      <div className='note-viewer'>
        {note.map(note => {
          return (
            <Note
              id={note.id}
              key={note.id}
              note_title={note.note_title}
              note_text={note.note_text}
              date={new Date(note.date).toDateString()}
              handleDelete={() => props.dispatch(startDeleteNote(note.id))}
              handleEdit={() =>
                props.dispatch(
                  showNote(note.id, note.note_title, note.note_text, note.date)
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToprops = state => {
  return {
    notes: state.notes,
    filters: state.filters
  };
};

export default connect(mapStateToprops)(ShowNote);
