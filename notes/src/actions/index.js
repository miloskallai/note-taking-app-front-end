import firebase from '../firebase/firebase';

export const setNoteData = notes => ({
  type: 'SET_NOTE_DATA',
  notes
});

export const startSetNoteData = () => {
  return dispatch => {
    return firebase
      .database()
      .ref('notes')
      .once('value')
      .then(snapshot => {
        const notes = [];
        snapshot.forEach(childSnapshot => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setNoteData(notes));
      });
  };
};

export const addNote = note => ({
  type: 'ADD_NOTE',
  note
});

export const startAddNote = (note_title, note_text) => {
  const date = new Date().toDateString();
  return dispatch => {
    const note = {
      note_title,
      note_text,
      date
    };

    firebase
      .database()
      .ref('notes')
      .push(note)
      .then(ref => {
        dispatch(addNote({ id: ref.key, ...note }));
      });
  };
};

export const deleteNote = id => ({
  type: 'DELETE_NOTE',
  id
});

export const startDeleteNote = id => {
  return dispatch => {
    return firebase
      .database()
      .ref(`notes/${id}`)
      .remove()
      .then(() => {
        dispatch(deleteNote(id));
      });
  };
};

export const showNote = (id, note_title, note_text, date) => ({
  type: 'SHOW_NOTE',
  id,
  note_title,
  note_text,
  date
});

export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});

export const startEditNote = (id, updates) => {
  console.log(id);
  console.log(updates);
  return dispatch => {
    return firebase
      .database()
      .ref(`notes/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editNote(id, updates));
      });
  };
};
