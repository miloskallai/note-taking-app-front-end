import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAddNote } from '../actions/index';

const AddNote = ({ history, startAddNote }) => {
  let title_input;
  let text_input;

  return (
    <div className='add-note-container bg-white text-dark'>
      <form
        className='form-group'
        onSubmit={event => {
          event.preventDefault();
          startAddNote(title_input.value, text_input.value);
          history.push('/');
        }}
      >
        <h2>Add New Note</h2>
        <div className='input-container'>
          <label className='input-label' htmlFor='note_title'>
            title
          </label>
          <input
            className='form-control'
            type='text'
            id='note_title'
            name='note_title'
            label='note_title'
            ref={node => (title_input = node)}
          />

          <label className='input-label' htmlFor='note_text'>
            note
          </label>
          <textarea
            className='form-control'
            rows='30'
            label='note_text'
            id='note_text'
            name='note_text'
            ref={node => (text_input = node)}
          />

          <div className='btn-container text-dark'>
            <Link className='link' to='/'>
              <span className='text-dark'>
                <ion-icon name='close' />
              </span>
            </Link>
            <button className='btn-icon'>
              <span className='link btn-icon input-icon icon-container text-dark'>
                <ion-icon name='save' />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  note_title: state.note_title,
  note_text: state.note_text
});

const mapDispatchToProps = dispatch => ({
  startAddNote: (note_title, note_text) =>
    dispatch(startAddNote(note_title, note_text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);
