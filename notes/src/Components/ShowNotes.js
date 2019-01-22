import React, { Component } from 'react';
import Note from './Note';

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

  handleDelete(id) {
    fetch(`http://localhost:8080/notes/${id}`, {
      method: 'delete',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ _id: id })
    });
    const notes = this.state.notes.filter(note => note._id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className='notes-container'>
        <h1>My Notes</h1>

        {this.state.notes.map(note => (
          <Note
            key={note._id}
            title={note.note_title}
            noteText={note.note_text}
            date={note.date}
            onClick={() => this.handleDelete(note._id)}
          />
        ))}
      </div>
    );
  }
}

export default ShowNotes;
