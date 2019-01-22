import React, { Component } from 'react';
import Note from './Note';

class ShowNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: []
    };
  }

  componentDidMount() {
    const id = localStorage.getItem('id');
    fetch(`http://localhost:8080/notes/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(prevState => ({
          note: [...prevState.note, data]
        }));
      });
  }

  render() {
    return (
      <div className='single-note-container'>
        {this.state.note.map(note => (
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

export default ShowNote;
