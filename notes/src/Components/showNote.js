import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Note from './Note';

class ShowNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: [],
      redirect: false,
      redirectEdit: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  handleDelete() {
    const id = localStorage.getItem('id');

    this.setState({
      redirect: true
    });

    fetch(`http://localhost:8080/notes/${id}`, {
      method: 'delete',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ _id: id })
    });

  }

  handleEdit() {

    this.setState({
      redirectEdit: true
    });

  }

  render() {
    return (
      <div className='single-note-container'>
        <div className='note-viewer'>
          {this.state.note.map(note => (
            <Note
              key={note._id}
              title={note.note_title}
              noteText={note.note_text}
              date={note.date}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          ))}
          {this.state.redirect && <Redirect to='/' />}

          {this.state.redirectEdit && <Redirect to={`/notes/edit/${this.state.note[0]._id}`} />}
        </div>
      </div>
    );
  }
}

export default ShowNote;
