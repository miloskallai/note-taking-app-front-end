import React, { Component } from 'react';
import Input from './Input';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase/firebase';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };

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
    const note = {
      note_title,
      note_text,
      date: firebase.database.ServerValue.TIMESTAMP
    };
    firebase
      .database()
      .ref('notes')
      .push(note);

    this.setState({
      redirect: true
    });
  }

  render() {
    return (
      <div className='add-note-container'>
        <form onSubmit={this.handleSubmit}>
          <h2>Add New Note</h2>
          <Input onChange={this.handleChange} />
        </form>
        {this.state.redirect && <Redirect to='/' />}
      </div>
    );
  }
}

export default AddNote;
