import React, { Component } from 'react';
import NotePreview from './NotePreview';
import NavBar from './NavBar';
import firebase from '../firebase/firebase';

class ShowNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      noteFilter: ''
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.fetchNotes = this.fetchNotes.bind(this);
  }

  fetchNotes() {
    const notes = [];
    firebase
      .database()
      .ref('notes')
      .on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
      });

    this.setState({ notes });
  }

  componentDidMount() {
    this.fetchNotes();
  }

  handleDelete(id) {
    firebase
      .database()
      .ref(`notes/${id}`)
      .remove();
    const notes = this.state.notes.filter(note => note._id !== id);
    this.setState({ notes });
  }

  handleFilter = e => {
    this.setState({
      noteFilter: e.target.value
    });
  };

  showNote(id) {
    localStorage.setItem('id', id);
  }

  render() {
    return (
      <div className='main-container'>
        <div className='preview-container'>
          <NavBar
            handleFilter={this.handleFilter}
            filteredValue={this.state.noteFilter}
          />
          <div className='note-preview-organiser'>
            {this.state.notes.map(
              note =>
                note.note_text.includes(
                  this.state.noteFilter.toLocaleLowerCase()
                ) && (
                  <NotePreview
                    key={note.id}
                    title={note.note_title}
                    noteText={note.note_text}
                    date={new Date(note.date).toDateString()}
                    id={note.id}
                    handleDelete={() => this.handleDelete(note.id)}
                    showNote={() => this.showNote(note.id)}
                    handleEdit={() => this.showNote(note.id)}
                  />
                )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowNotes;
