import React, { Component } from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import { startEditNote } from '../actions';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.filters ? props.filters.id : '',
      note_text: props.filters ? props.filters.note_text : '',
      note_title: props.filters ? props.filters.note_title : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({
      [name]: value
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.filters.id !== prevState.id) {
      return {
        id: nextProps.filters ? nextProps.filters.id : '',
        note_text: nextProps.filters ? nextProps.filters.note_text : '',
        note_title: nextProps.filters ? nextProps.filters.note_title : ''
      };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filters.id !== this.props.filters.id) {
      this.setState({
        id: this.props.filters ? this.props.filters.id : '',
        note_text: this.props.filters ? this.props.filters.note_text : '',
        note_title: this.props.filters ? this.props.filters.note_title : ''
      });
    }
  }

  render() {
    return (
      <div className='add-note-container bg-white text-dark'>
        <form
          className='form-group'
          onSubmit={event => {
            event.preventDefault();
            const updates = {
              note_title: this.state.note_title,
              note_text: this.state.note_text
            };
            const id = this.state.id;
            this.props.startEditNote(id, updates);
            this.props.history.push('/');
          }}
        >
          <h2>Edit note</h2>
          <Input
            key={this.state.id}
            titleValue={this.state.note_title}
            textValue={this.state.note_text}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  startEditNote: (id, updates) => dispatch(startEditNote(id, updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote);
