import React from 'react';
import NavBar from '../components/NavBar';
import NotePreview from '../components/NotePreview';
import CreateNewNote from '../components/CreateNewNote';

const styles = {
  noteContainer: {
    marginTop: '60px'
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  newNoteContainer: {
    margin: '60px',
    display: 'flex'
  }
};

const SharedNotes = () => {
  return (
    <div>
      <NavBar />
      <div style={styles.mainContainer}>
        <div style={styles.noteContainer}>
          <NotePreview />
          <NotePreview />
          <NotePreview />
        </div>
        <div style={styles.newNoteContainer}>
          <CreateNewNote text="Create New Shared Note" />
        </div>
      </div>
    </div>
  );
};
export default SharedNotes;
