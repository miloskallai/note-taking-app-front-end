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
          />
        ))}
      </div>
    );
  }
}

export default ShowNotes;
