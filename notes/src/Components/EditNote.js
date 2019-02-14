import React, { Component } from 'react';
import Input from './Input';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase/firebase';

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false, note_text: '', note_title: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    const id = localStorage.getItem('id');
    firebase
      .database()
      .ref(`notes/${id}`)
      .on('value', snapshot => {
        const data = snapshot.val();
        this.setState({
          note_text: data.note_text,
          note_title: data.note_title
        });
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({
      [name]: value
    });
  }

  handleUpdate(event) {
    event.preventDefault();
    const { note_title, note_text } = this.state;
    const id = localStorage.getItem('id');

    firebase
      .database()
      .ref(`notes/${id}`)
      .update({
        note_title,
        note_text,
        date: firebase.database.ServerValue.TIMESTAMP
      });

    this.setState({
      redirect: true
    });
  }

  render() {
    return (
      <div className='add-note-container'>
        <form onSubmit={this.handleUpdate}>
          <Input
            key={this.state._id}
            titleValue={this.state.note_title}
            textValue={this.state.note_text}
            onChange={this.handleChange}
          />
        </form>
        {this.state.redirect && <Redirect to='/' />}
      </div>
    );
  }
}

export default EditNote;
