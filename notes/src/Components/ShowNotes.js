import React from 'react';
import NotePreview from './NotePreview';
import NavBar from './NavBar';
import { connect } from 'react-redux';

const ShowNotes = props => {
  return (
    <div className='main-container'>
      <div className='preview-container'>
        <NavBar />
        <div className='note-preview-organiser'>
          {props.notes.map(note => {
            return (
              <NotePreview
                key={note.id}
                note_title={note.note_title}
                note_text={note.note_text}
                date={note.date}
                id={note.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ShowNotes);

//new Date(note.date).toDateString()
