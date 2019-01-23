import React, { Component } from 'react';
import Input from './Input';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { note_title, note_text } = this.state;

    fetch('http://localhost:8080/notes', {
      method: 'post',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        note_title,
        note_text,
        date: new Date()
      })
    });
  }

  render() {
    return (
      <div className='add-note-container'>
        <form onSubmit={this.handleSubmit}>
          <p>Add New Note</p>
          <Input onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddNote;
