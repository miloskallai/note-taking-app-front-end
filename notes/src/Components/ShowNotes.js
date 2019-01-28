import React, { Component } from 'react';
import NotePreview from './NotePreview';
import NavBar from './NavBar';

class ShowNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/notes')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ notes: data });
      });
  }

  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      fetch('http://localhost:8080/notes')
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ notes: data });
        });
    }
  }

  handleDelete(id) {
    fetch(`http://localhost:8080/notes/${id}`, {
      method: 'delete',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ _id: id })
    });
    const notes = this.state.notes.filter(note => note._id !== id);
    this.setState({ notes });
  }

  showNote(id) {
    localStorage.setItem('id', id);
  }

  render() {
    return (
      <div className='main-container'>
        <div className='preview-container'>
          <NavBar />
          {this.state.notes.map(note => (
            <NotePreview
              key={note._id}
              title={note.note_title}
              noteText={note.note_text}
              date={note.date}
              id={note._id}
              handleDelete={() => this.handleDelete(note._id)}
              showNote={() => this.showNote(note._id)}
              handleEdit={() => this.showNote(note._id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ShowNotes;
