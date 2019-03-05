import React, {Component} from 'react';
import NotePreview from './NotePreview';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class ShowNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteFilter: ''
    }
        this.handleFilter = this.handleFilter.bind(this);

  }

 handleFilter = e => {
    this.setState({
      noteFilter: e.target.value
    });
  };

  render(){
    return (
    <div className='main-container'>
      <div className='preview-container'>
        <NavBar     handleFilter={this.handleFilter}
            filteredValue={this.state.noteFilter} />
        <div className='note-preview-organiser'>

          {this.props.notes.map(note => {

            return note.note_text.includes(
                  this.state.noteFilter.toLocaleLowerCase()
                ) &&
            (
              <NotePreview
                key={note.id}
                note_title={note.note_title}
                note_text={note.note_text}
                date={note.date}
                id={note.id}
              />
            );
          })}

        </div>
      </div>
    </div>
  );
  }

};

const mapStateToProps = state => {
  return {
    notes: state.notes,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ShowNotes);
