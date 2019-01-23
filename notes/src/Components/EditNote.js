import React, { Component } from 'react';
import Input from './Input';
import { Redirect } from 'react-router-dom';

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    const id = localStorage.getItem('id');
    fetch(`http://localhost:8080/notes/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(data);
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
    fetch(`http://localhost:8080/notes/${id}`, {
      method: 'put',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        note_title,
        note_text,
        date: new Date()
      })
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
